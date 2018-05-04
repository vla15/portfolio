const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000

app.get('/', (req, res) => { res.status(200).sendFile(path.join(__dirname, '../src/index.html'))});
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log(`app listening in on port, ${port}`));