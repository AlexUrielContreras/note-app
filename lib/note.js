const fs = require('fs');
const path = require('path');

function createNewNote(note, noteArr) {
    noteArr.push(note);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify({ note }, null, 2), (err) => {
        if (err) throw err
    })
    return note
};

module.exports = { createNewNote }