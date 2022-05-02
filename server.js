const express = require('express');
// process.env.PORT uses the port the hosting website uses if not defined it default to port 3001
const PORT = process.env.PORT || 3001
const app = express();
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/note')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// we include the whole folder so that the styles.css get applied
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`)
})