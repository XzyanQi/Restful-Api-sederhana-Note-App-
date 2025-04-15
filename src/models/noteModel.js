const { readDatabase, writeDatabase, generateId } = require('../utils/database');


class Note {
  static getAll() {
    const db = readDatabase();
    return db.notes;
  }

  static getById(id) {
    const db = readDatabase();
    return db.notes.find(note => note.id === id);
  }

  static create(noteData) {
    const db = readDatabase();
    
    const newNote = {
      id: generateId(),
      judul: noteData.judul,
      isi: noteData.isi,
      tanggal: new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
    };
    
    db.notes.push(newNote);
    writeDatabase(db);
    
    return newNote;
  }

  static update(id, noteData) {
    const db = readDatabase();
    const noteIndex = db.notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return null;
    }
    
    // update
    db.notes[noteIndex] = {
      ...db.notes[noteIndex],
      judul: noteData.judul,
      isi: noteData.isi
    };
    
    writeDatabase(db);
    
    return db.notes[noteIndex];
  }

  static delete(id) {
    const db = readDatabase();
    const noteIndex = db.notes.findIndex(note => note.id === id);
    
    if (noteIndex === -1) {
      return false;
    }
    
    db.notes.splice(noteIndex, 1);
    writeDatabase(db);
    
    return true;
  }
}

module.exports = Note;