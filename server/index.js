const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => { res.status(200).sendFile(path.join(__dirname, '../src/index.html'))});
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(3000, () => console.log('app listening in on port', 3000));