// Local-only D1 adapter. Production uses the platform binding.
export function d1Adapter(database) {
  return { prepare(sql) { return { bind(...args) { return {
    async all() { return { results: database.prepare(sql).all(...args) }; },
    async run() { database.prepare(sql).run(...args); return { success: true }; },
  }; } }; } };
}
