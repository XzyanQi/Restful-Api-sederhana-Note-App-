const Note = require('../models/noteModel');

const noteController = {
  // GET /notes - Menampilkan seluruh catatan
  getAllNotes: (req, res) => {
    const notes = Note.getAll();
    res.json(notes);
  },

  // GET /notes/:id - Menampilkan detail catatan berdasarkan ID
  getNoteById: (req, res) => {
    const note = Note.getById(req.params.id);
    
    if (!note) {
      return res.status(404).json({ message: 'Catatan tidak ditemukan' });
    }
    
    res.json(note);
  },

  // POST /notes - Menambahkan catatan baru
  createNote: (req, res) => {
    const { judul, isi } = req.body;
    
    if (!judul || !isi) {
      return res.status(400).json({ message: 'Judul dan isi diperlukan' });
    }
    
    const newNote = Note.create({ judul, isi });
    res.status(201).json(newNote);
  },

  // PUT /notes/:id - Mengedit catatan berdasarkan ID
  updateNote: (req, res) => {
    const { judul, isi } = req.body;
    
    if (!judul || !isi) {
      return res.status(400).json({ message: 'Judul dan isi diperlukan' });
    }
    
    const updatedNote = Note.update(req.params.id, { judul, isi });
    
    if (!updatedNote) {
      return res.status(404).json({ message: 'Catatan tidak ditemukan' });
    }
    
    res.json(updatedNote);
  },

  // DELETE /notes/:id - Menghapus catatan
  deleteNote: (req, res) => {
    const result = Note.delete(req.params.id);
    
    if (!result) {
      return res.status(404).json({ message: 'Catatan tidak ditemukan' });
    }
    
    res.json({ message: 'Catatan berhasil dihapus' });
  }
};

module.exports = noteController;