import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const catalog = JSON.parse(await readFile(new URL('training/small-molecule-course.json', root), 'utf8'));
const answers = {};
for (const level of catalog.levels) {
  if (Object.hasOwn(answers, level.id)) throw new Error('Duplicate lesson ID');
  const correct = level.question.options.map((option, i) => option[2] === true ? i : -1).filter(i => i >= 0);
  if (correct.length !== 1) throw new Error('Exactly one supported answer is required: ' + level.id);
  answers[level.id] = correct[0];
}
await writeFile(new URL('dist/catalog.js', root), '// Generated from training/small-molecule-course.json.\nconst CATALOG = ' + JSON.stringify(catalog) + ';\n');
await writeFile(new URL('server/answers.mjs', root), '// Generated from training/small-molecule-course.json.\nexport const ANSWERS = Object.freeze(' + JSON.stringify(answers) + ');\n');
