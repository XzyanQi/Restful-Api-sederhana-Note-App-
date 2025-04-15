const fs = require('fs');
const path = require('path');

// Tujuan Databse
const dbPath = path.join(__dirname, '../../data/db.json');

// Fungsi hmmmm
const readDatabase = () => {
  if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  }
  
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({ notes: [] }));
    return { notes: [] };
  }
  
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

const writeDatabase = (data) => {
  if (!fs.existsSync(path.dirname(dbPath))) {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  }
  
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

const generateId = () => {
  return Date.now().toString();
};

module.exports = {
  readDatabase,
  writeDatabase,
  generateId
};