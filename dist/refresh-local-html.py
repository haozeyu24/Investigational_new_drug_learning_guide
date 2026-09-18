#!/usr/bin/env python3
"""Refresh index.html after editing guide source, reasoning content or styles.

The local page embeds these files together so cached script versions cannot mix.
Images remain in assets/. No server, network request, or dependency is needed.
Run: python3 dist/refresh-local-html.py
"""
from pathlib import Path
from datetime import datetime, timezone
from zoneinfo import ZoneInfo
import hashlib
import re

root = Path(__file__).resolve().parent
entry = root / 'index.html'
html = entry.read_text()
css = '\n'.join((root / name).read_text() for name in ('styles.css', 'reasoning.css'))
js = '\n;\n'.join((root / name).read_text() for name in ('content.js', 'catalog.js', 'reasoning-content.js', 'reasoning.js', 'app.js'))
if re.search(r'</(?:script|style)\b', js + css, re.I):
    raise ValueError('An inline closing tag needs escaping before packaging.')
html = re.sub(r'<link\b[^>]*href="styles\.css(?:\?[^"]*)?"[^>]*>', '', html)
html = re.sub(r'<script\b[^>]*src="(?:content|catalog|app)\.js(?:\?[^"]*)?"[^>]*>\s*</script>', '', html)
html = re.sub(r'<style data-local-bundle>.*?</style>', '', html, flags=re.S)
html = re.sub(r'<script data-local-bundle>.*?</script>', '', html, flags=re.S)
html = re.sub(r'<!-- Local bundle: .*? -->\s*', '', html)
# Record the build time once, rather than showing each visitor's current time.
updated = datetime.now(timezone.utc).replace(second=0, microsecond=0)
pacific = updated.astimezone(ZoneInfo('America/Los_Angeles'))
stamp = updated.isoformat().replace('+00:00', 'Z')
label = f'{pacific:%b} {pacific.day}, {pacific.year} · {pacific.hour % 12 or 12}:{pacific:%M %p %Z}'
updated_note = f'<p class="site-last-updated">Last updated · <time datetime="{stamp}">{label}</time></p>'
html = re.sub(r'<p class="site-last-updated">.*?</p>', '', html)
html, footer_count = re.subn(r'(<footer class="site-footer">.*?)(</footer>)', lambda match: match[1] + updated_note + match[2], html, count=1)
if footer_count != 1:
    raise ValueError('The landing-page update time needs the site footer.')
version = hashlib.sha256((css + js).encode()).hexdigest()[:12]
html = html.replace('</head>', '<style data-local-bundle>\n' + css + '\n</style></head>', 1)
html = html.replace('</body>', '<script data-local-bundle>\n' + js + '\n</script></body>', 1)
html = '<!-- Local bundle: ' + version + '; refresh with python3 dist/refresh-local-html.py -->\n' + html
# Replace the entry file atomically so a refresh cannot read a half-written page.
tmp = entry.with_suffix('.html.tmp')
tmp.write_text(html)
tmp.replace(entry)
print('Updated local HTML bundle:', version)
