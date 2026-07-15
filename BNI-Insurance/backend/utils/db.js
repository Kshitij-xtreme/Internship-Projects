// Simple JSON-file based data helper (acts as a lightweight database)
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

function filePath(name) {
  return path.join(dataDir, `${name}.json`);
}

function readData(name) {
  try {
    const raw = fs.readFileSync(filePath(name), 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function writeData(name, data) {
  fs.writeFileSync(filePath(name), JSON.stringify(data, null, 2), 'utf-8');
  return data;
}

function nextId(arr) {
  return arr.length ? Math.max(...arr.map(i => i.id)) + 1 : 1;
}

module.exports = { readData, writeData, nextId };
