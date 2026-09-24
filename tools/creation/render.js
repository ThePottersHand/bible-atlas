/* ------------------------------------------------------------------
   Export "In the Beginning" frame by frame with headless Chromium.

     node tools/creation/render.js stills 0.5 11 23.8 [--w 960] [--out dir]
     node tools/creation/render.js film [--fps 30] [--w 1920] [--from 0] [--to 72] [--out master.mp4] [--web creation/in-the-beginning.mp4]
     node tools/creation/render.js frames [--out tools/cache/frames]    # PNGs to disk, resumable; encode with ffmpeg after

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

/* one encoder: frames arrive as PNG on stdin; audio is trimmed to the same span */
function encoder(ffmpeg, fps, audio, from, to, out, v, a) {
  const args = ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-'];
  if (audio) args.push('-ss', String(from), '-t', String(to - from), '-i', audio);
  args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-movflags', '+faststart',
    '-color_primaries', 'bt709', '-color_trc', 'bt709', '-colorspace', 'bt709', ...v);
  if (audio) args.push('-c:a', 'aac', ...a, '-shortest');
  args.push(out);
  return spawn(ffmpeg, args, { stdio: ['pipe', 'inherit', 'inherit'] });
}

async function film() {
  const width = +arg('w', 1920);
  const fps = +arg('fps', 30);
  const ffmpeg = process.env.FFMPEG || 'ffmpeg';
  const outFile = path.resolve(arg('out', path.join(ROOT, 'creation', 'in-the-beginning.mp4')));
  const webFile = arg('web', null);
  const audio = arg('audio', path.join(ROOT, 'tools', 'cache', 'score.wav'));
  const s = await open(width);
  const from = +arg('from', 0), to = +arg('to', s.info.duration);
  const n0 = Math.round(from * fps), n1 = Math.round(to * fps);
  // encode from a snapshot of the score, so re-rendering it mid-export cannot cut the film short
  let withAudio = null;
  if (fs.existsSync(audio) && !process.argv.includes('--silent')) {
    withAudio = path.join(require('os').tmpdir(), 'in-the-beginning-score-' + process.pid + '.wav');
    fs.copyFileSync(audio, withAudio);
  }
  // the master, and optionally a lighter copy for the web page, fed from the same frames
  const encs = [encoder(ffmpeg, fps, withAudio, from, to, outFile,
    ['-preset', arg('preset', 'slow'), '-crf', arg('crf', '19'), '-tune', arg('tune', 'film')], ['-b:a', '256k'])];
  if (webFile) encs.push(encoder(ffmpeg, fps, withAudio, from, to, path.resolve(webFile),
    ['-preset', 'slow', '-crf', arg('webcrf', '25'), '-maxrate', '4500k', '-bufsize', '9000k', '-tune', 'film'], ['-b:a', '160k']));
  const started = Date.now();
  for (let n = n0; n < n1; n++) {
    const t = n / fps;
    await s.page.evaluate((tt) => window.FILM_CAPTURE.frame(tt), t);
    const png = await s.page.screenshot({ type: 'png' });
    for (const ff of encs) if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
    if ((n - n0) % 30 === 0) {
      const done = n - n0 + 1, left = (n1 - n) * (Date.now() - started) / done / 1000;
      console.log(`frame ${n}/${n1}  t=${t.toFixed(2)}s  ~${Math.round(left / 60)} min left`);
    }
  }
  for (const ff of encs) ff.stdin.end();
  await Promise.all(encs.map((ff) => new Promise((r) => ff.on('close', r))));
  await s.browser.close();
  s.srv.close();
  if (withAudio) fs.unlinkSync(withAudio);
  console.log('wrote', outFile, webFile || '');
}

/* frames to disk (resumable: frames already written are skipped), for encoding separately */
async function frames() {
  const width = +arg('w', 1920);
  const fps = +arg('fps', 30);
  const out = path.resolve(arg('out', path.join(ROOT, 'tools', 'cache', 'frames')));
  fs.mkdirSync(out, { recursive: true });
  const s = await open(width);
  const from = +arg('from', 0), to = +arg('to', s.info.duration);
  const n0 = Math.round(from * fps), n1 = Math.round(to * fps);
  const started = Date.now();
  let made = 0;
  for (let n = n0; n < n1; n++) {
    const f = path.join(out, 'f' + String(n).padStart(5, '0') + '.png');
    if (fs.existsSync(f) && fs.statSync(f).size > 0) continue;
    await s.page.evaluate((tt) => window.FILM_CAPTURE.frame(tt), n / fps);
    await s.page.screenshot({ path: f + '.tmp', type: 'png' });
    fs.renameSync(f + '.tmp', f);
    made++;
    if (made % 30 === 1) {
      const left = (n1 - n) * (Date.now() - started) / made / 1000;
      console.log(`frame ${n}/${n1}  ~${Math.round(left / 60)} min left`);
    }
  }
  await s.browser.close();
  s.srv.close();
  console.log('frames in', out);
}

const mode = process.argv[2];
if (mode === 'stills') stills(process.argv.slice(3).filter((a, i, all) => !a.startsWith('--') && !(all[i - 1] || '').startsWith('--')).map(Number));
else if (mode === 'film') film();
else if (mode === 'frames') frames();
else console.log('usage: render.js stills <t...> | film [--fps 30] [--w 1920]');
