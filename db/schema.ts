import { integer, primaryKey, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const lessonProgress = sqliteTable('lesson_progress', {
  userId: text('user_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  step: integer('step').notNull().default(0),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
  updatedAt: integer('updated_at').notNull(),
}, table => [primaryKey({ columns: [table.userId, table.lessonId] })]);
