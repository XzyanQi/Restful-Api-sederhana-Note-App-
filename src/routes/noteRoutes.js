const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

// GET /notes - Menampilkan seluruh catatan
router.get('/', noteController.getAllNotes);

// GET /notes/:id - Menampilkan detail catatan berdasarkan ID
router.get('/:id', noteController.getNoteById);

// POST /notes - Menambahkan catatan baru
router.post('/', noteController.createNote);

// PUT /notes/:id - Mengedit catatan berdasarkan ID
router.put('/:id', noteController.updateNote);

// DELETE /notes/:id - Menghapus catatan
router.delete('/:id', noteController.deleteNote);

module.exports = router;