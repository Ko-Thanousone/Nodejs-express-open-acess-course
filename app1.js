const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3001;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public")))//link to dinamic file in public folder

app.get("/", (req, res) => {
    res.send('Hello I am lerning Nodejs');
})

app.listen(port, () => {
    debug("Listening on port ", port);
})