const ANSWERS = Object.freeze({ map: 0, model: 2, exposure: 1, cmc: 1, clinical: 0, people: 2, review: 1 });
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});

export function progressStore(db, userId) {
  if (!db) throw new Error('Progress storage unavailable');
  return {
    async read() {
      const { results } = await db.prepare('SELECT lesson_id AS lesson, step, completed, updated_at AS updatedAt FROM lesson_progress WHERE user_id = ?').bind(userId).all();
      return { lessons: results.map(row => ({ ...row, completed: Boolean(row.completed) })) };
    },
    async savePlace(lesson, step) {
      await db.prepare(`INSERT INTO lesson_progress (user_id, lesson_id, step, completed, updated_at) VALUES (?, ?, ?, 0, ?)
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET step = excluded.step, updated_at = excluded.updated_at`).bind(userId, lesson, step, Date.now()).run();
    },
    async complete(lesson) {
      await db.prepare(`INSERT INTO lesson_progress (user_id, lesson_id, step, completed, updated_at) VALUES (?, ?, 2, 1, ?)
        ON CONFLICT(user_id, lesson_id) DO UPDATE SET completed = 1, step = 2, updated_at = excluded.updated_at`).bind(userId, lesson, Date.now()).run();
    },
  };
}

export async function handleProgress(request, env) {
  const url = new URL(request.url);
  // This header is supplied by the private Sites authentication dispatcher, not by client state.
  const userId = request.headers.get('oai-authenticated-user-id');
  if (!userId) return json({ error: 'Sign in to your Site account to save progress.' }, 401);
  if (!['/api/progress', '/api/complete'].includes(url.pathname)) return json({ error: 'Not found.' }, 404);
  if (request.method !== 'GET' && request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
  if (request.method === 'GET' && url.pathname !== '/api/progress') return json({ error: 'Method not allowed.' }, 405);
  try {
    const store = progressStore(env.DB, userId);
    if (request.method === 'GET') return json(await store.read());
    if (request.headers.get('origin') && request.headers.get('origin') !== url.origin) return json({ error: 'Request origin does not match.' }, 403);
    if (request.headers.get('sec-fetch-site') === 'cross-site') return json({ error: 'Cross-site requests are not accepted.' }, 403);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'Expected JSON.' }, 415);
    const raw = await request.text();
    if (raw.length > 1024) return json({ error: 'Request is too large.' }, 413);
    let body;
    try { body = JSON.parse(raw); } catch { return json({ error: 'Invalid JSON.' }, 400); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return json({ error: 'Invalid request.' }, 400);
    const keys = url.pathname === '/api/complete' ? ['lesson', 'answer'] : ['lesson', 'step'];
    if (Object.keys(body).some(k => !keys.includes(k)) || typeof body.lesson !== 'string' || !Object.hasOwn(ANSWERS, body.lesson)) return json({ error: 'Unknown lesson or request field.' }, 400);
    if (url.pathname === '/api/complete') {
      if (!Number.isInteger(body.answer) || body.answer !== ANSWERS[body.lesson]) return json({ error: 'Check the exercise before completing this level.' }, 422);
      await store.complete(body.lesson);
    } else {
      if (!Number.isInteger(body.step) || body.step < 0 || body.step > 2) return json({ error: 'Invalid lesson step.' }, 400);
      await store.savePlace(body.lesson, body.step);
    }
    return json(await store.read());
  } catch {
    return json({ error: 'Progress could not be saved right now. You can keep learning and retry.' }, 503);
  }
}
