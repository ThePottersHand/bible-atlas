"""Serve the atlas locally: python serve.py  (then open http://localhost:8080)"""
import http.server, socketserver, webbrowser, os, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store'); super().end_headers()
    def log_message(self, *a): pass
with socketserver.TCPServer(('', port), H) as s:
    print('Serving The Land Bears Witness at http://localhost:%d' % port)
    try: webbrowser.open('http://localhost:%d' % port)
    except Exception: pass
    s.serve_forever()
