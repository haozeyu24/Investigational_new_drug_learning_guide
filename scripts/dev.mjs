import { createServer } from 'node:http';
import { readFile, mkdir, readdir } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';
import { handleProgress } from '../server/progress.mjs';
import { d1Adapter } from './sqlite-adapter.mjs';
const root = new URL('../', import.meta.url);
await mkdir(new URL('.local/', root), { recursive: true });
const database = new DatabaseSync(new URL('.local/progress.sqlite', root));
database.exec('CREATE TABLE IF NOT EXISTS _local_migrations (name TEXT PRIMARY KEY)');
for (const name of (await readdir(new URL('drizzle/', root))).filter(n=>n.endsWith('.sql')).sort()) {
  if (!database.prepare('SELECT name FROM _local_migrations WHERE name = ?').get(name)) {
    database.exec(await readFile(new URL('drizzle/' + name, root), 'utf8'));
    database.prepare('INSERT INTO _local_migrations (name) VALUES (?)').run(name);
  }
}
const server = createServer(async(req,res)=>{
  try {
    const url = new URL(req.url,'http://127.0.0.1:4173');
    if(url.pathname.startsWith('/api/')) {
      const chunks=[];for await(const chunk of req)chunks.push(chunk);
      const headers = new Headers(req.headers);headers.set('oai-authenticated-user-id','local-preview-learner');
      const response = await handleProgress(new Request(url,{method:req.method,headers,body:['GET','HEAD'].includes(req.method)?undefined:Buffer.concat(chunks)}),{DB:d1Adapter(database)});
      res.writeHead(response.status,Object.fromEntries(response.headers));res.end(await response.text());return;
    }
    const files={'/':'index.html','/index.html':'index.html','/styles.css':'styles.css','/app.js':'app.js','/content.js':'content.js'};
    if(!files[url.pathname]){res.writeHead(404);res.end('Not found');return;}
    const types={html:'text/html',css:'text/css',js:'text/javascript'};
    res.writeHead(200,{'Content-Type':types[files[url.pathname].split('.').pop()]+'; charset=utf-8','Cache-Control':'no-store'});
    res.end(await readFile(new URL('dist/'+files[url.pathname],root)));
  } catch {res.writeHead(500);res.end('Preview error');}
});
server.listen(4173,'127.0.0.1',()=>console.log('IND preview: http://127.0.0.1:4173/'));
