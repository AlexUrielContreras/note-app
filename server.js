const express = require('express');
// process.env.PORT uses the port the hosting website uses if not defined it default to port 3001
const PORT = process.env.PORT || 3001
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');

app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
})