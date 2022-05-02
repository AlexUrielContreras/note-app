const router = require('express').Router();
const db = require('../../db/db.json');
const newNote = require('../../lib/note')

router.get('/notes', (req, res) => {
    let results = db
    return res.json(results)
});


module.exports = router