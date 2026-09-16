#!/usr/bin/env python3
"""Refresh index.html after editing content.js, catalog.js, app.js, or styles.css.

The local page embeds these files together so cached script versions cannot mix.
Images remain in assets/. No server, network request, or dependency is needed.
Run: python3 dist/refresh-local-html.py
"""
from pathlib import Path
import hashlib
import re

root = Path(__file__).resolve().parent
entry = root / 'index.html'
html = entry.read_text()
css = (root / 'styles.css').read_text()
js = '\n;\n'.join((root / name).read_text() for name in ('content.js', 'catalog.js', 'app.js'))
if re.search(r'</(?:script|style)\b', js + css, re.I):
    raise ValueError('An inline closing tag needs escaping before packaging.')
html = re.sub(r'<link\b[^>]*href="styles\.css(?:\?[^"]*)?"[^>]*>', '', html)
html = re.sub(r'<script\b[^>]*src="(?:content|catalog|app)\.js(?:\?[^"]*)?"[^>]*>\s*</script>', '', html)
html = re.sub(r'<style data-local-bundle>.*?</style>', '', html, flags=re.S)
html = re.sub(r'<script data-local-bundle>.*?</script>', '', html, flags=re.S)
html = re.sub(r'<!-- Local bundle: .*? -->\s*', '', html)
version = hashlib.sha256((css + js).encode()).hexdigest()[:12]
html = html.replace('</head>', '<style data-local-bundle>\n' + css + '\n</style></head>', 1)
html = html.replace('</body>', '<script data-local-bundle>\n' + js + '\n</script></body>', 1)
html = '<!-- Local bundle: ' + version + '; refresh with python3 dist/refresh-local-html.py -->\n' + html
# Replace the entry file atomically so a refresh cannot read a half-written page.
tmp = entry.with_suffix('.html.tmp')
tmp.write_text(html)
tmp.replace(entry)
print('Updated local HTML bundle:', version)
