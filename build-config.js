const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
const outPath = path.join(__dirname, 'config.js');

const env = {};
for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
  if (m) env[m[1]] = m[2].replace(/^['"]|['"]$/g, '');
}

if (!env.MAPBOX_ACCESS_TOKEN) {
  console.error('MAPBOX_ACCESS_TOKEN missing from .env');
  process.exit(1);
}

fs.writeFileSync(
  outPath,
  `window.CONFIG = ${JSON.stringify(env, null, 2)};\n`
);
console.log('Wrote', outPath);
