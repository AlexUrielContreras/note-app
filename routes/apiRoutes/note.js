const router = require('express').Router();
const db = require('../../db/db.json');
const newNote = require('../../lib/note')

router.get('/notes', (req, res) => {
    let results = db
    return res.json(results)
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();
    noteData = createNewNote(req.body, db)
    res.json(noteData);
    console.log(req.body)
})

module.exports = router