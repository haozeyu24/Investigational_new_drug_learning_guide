import { readFile, mkdir, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const files = {};
for (const [path, type] of [['index.html','text/html'],['styles.css','text/css'],['content.js','text/javascript'],['app.js','text/javascript']]) {
  files[path === 'index.html' ? '/' : '/' + path] = { body: await readFile(new URL('dist/' + path, root), 'utf8'), type: type + '; charset=utf-8' };
}
const progress = await readFile(new URL('server/progress.mjs', root), 'utf8');
const worker = `${progress}\nconst FILES = ${JSON.stringify(files)};\nexport default { async fetch(request, env) {\n const url = new URL(request.url);\n if(url.pathname.startsWith('/api/')) return handleProgress(request, env);\n const file = FILES[url.pathname === '/index.html' ? '/' : url.pathname];\n if(!file) return new Response('Not found', {status:404});\n if(!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed', {status:405});\n return new Response(request.method === 'HEAD' ? null : file.body, {headers:{'Content-Type':file.type,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}});\n}};\n`;
await mkdir(new URL('dist/server/', root), { recursive: true });
await writeFile(new URL('dist/server/index.js', root), worker);
const schema = JSON.parse(await readFile(new URL('.openai/hosting.json', root), 'utf8'));
if(schema.static || schema.d1 !== 'DB') throw new Error('Worker and D1 configuration required');
console.log('Built the lesson site and authenticated progress API.');
