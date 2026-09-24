/* ------------------------------------------------------------------
   Export "In the Beginning" frame by frame with headless Chromium.

     node tools/creation/render.js stills 0.5 11 23.8 [--w 960] [--out dir]
     node tools/creation/render.js film [--fps 30] [--w 1920] [--from 0] [--to 72] [--out creation/in-the-beginning.mp4]

   Needs Playwright (npm i -g playwright, or NODE_PATH pointing at it) and an
   ffmpeg with libx264 on PATH or in FFMPEG. Without a GPU, Chromium falls back
   to SwiftShader: slow (a few seconds a frame) but exact.
   ------------------------------------------------------------------ */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..', '..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.json': 'application/json', '.mp4': 'video/mp4' };

function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i > 0 ? process.argv[i + 1] : def;
}

function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const p = decodeURIComponent(req.url.split('?')[0]);
      let f = path.join(ROOT, p);
      if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
      fs.readFile(f, (err, data) => {
        if (err) { res.writeHead(404); return res.end(); }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

async function open(width) {
  const srv = await serve();
  const port = srv.address().port;
  const browser = await chromium.launch({
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl', '--autoplay-policy=no-user-gesture-required']
  });
  const height = Math.round(width * 9 / 16);
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.text().slice(0, 2000)); });
  page.on('pageerror', (e) => console.log('[page error]', e.message));
  await page.goto(`http://127.0.0.1:${port}/creation/?capture=1&w=${width}`);
  const info = await page.evaluate(() => window.FILM_CAPTURE.ready);
  return { srv, browser, page, info, width, height };
}

async function stills(times) {
  const width = +arg('w', 960);
  const out = arg('out', path.join(ROOT, 'tools', 'cache', 'stills'));
  fs.mkdirSync(out, { recursive: true });
  const s = await open(width);
  for (const t of times) {
    const t0 = Date.now();
    await s.page.evaluate((tt) => window.FILM_CAPTURE.frame(tt), t);
    const f = path.join(out, 't' + t.toFixed(2).padStart(6, '0') + '.png');
    await s.page.screenshot({ path: f });
    console.log(f, (Date.now() - t0) + ' ms');
  }
  await s.browser.close();
  s.srv.close();
}

async function film() {
  const width = +arg('w', 1920);
  const fps = +arg('fps', 30);
  const ffmpeg = process.env.FFMPEG || 'ffmpeg';
  const outFile = path.resolve(arg('out', path.join(ROOT, 'creation', 'in-the-beginning.mp4')));
  const audio = arg('audio', path.join(ROOT, 'tools', 'cache', 'score.wav'));
  const s = await open(width);
  const from = +arg('from', 0), to = +arg('to', s.info.duration);
  const n0 = Math.round(from * fps), n1 = Math.round(to * fps);
  const args = ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-'];
  const withAudio = fs.existsSync(audio) && !process.argv.includes('--silent');
  if (withAudio) args.push('-ss', String(from), '-t', String(to - from), '-i', audio);
  args.push('-c:v', 'libx264', '-preset', arg('preset', 'slow'), '-crf', arg('crf', '17'), '-tune', 'grain', '-pix_fmt', 'yuv420p',
    '-profile:v', 'high', '-movflags', '+faststart', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709');
  if (withAudio) args.push('-c:a', 'aac', '-b:a', '256k', '-shortest');
  args.push(outFile);
  const ff = spawn(ffmpeg, args, { stdio: ['pipe', 'inherit', 'inherit'] });
  const started = Date.now();
  for (let n = n0; n < n1; n++) {
    const t = n / fps;
    await s.page.evaluate((tt) => window.FILM_CAPTURE.frame(tt), t);
    const png = await s.page.screenshot({ type: 'png' });
    if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
    if ((n - n0) % 30 === 0) {
      const done = n - n0 + 1, left = (n1 - n) * (Date.now() - started) / done / 1000;
      console.log(`frame ${n}/${n1}  t=${t.toFixed(2)}s  ~${Math.round(left / 60)} min left`);
    }
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await s.browser.close();
  s.srv.close();
  console.log('wrote', outFile);
}

const mode = process.argv[2];
if (mode === 'stills') stills(process.argv.slice(3).filter((a, i, all) => !a.startsWith('--') && !(all[i - 1] || '').startsWith('--')).map(Number));
else if (mode === 'film') film();
else console.log('usage: render.js stills <t...> | film [--fps 30] [--w 1920]');
