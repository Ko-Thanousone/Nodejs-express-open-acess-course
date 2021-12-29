//run command
//set DEBUG =* & node app.js
//set DEBUG =app & node app.js

import express from 'express';// 
import chalk from 'chalk';//import chalk package by npm install "package name"
import morgan from 'morgan';
import debug from 'debug';

const logger = debug('namespace');
logger('Starting App');
const app = express();
const port = 3000;
app.use(morgan('combined'))

app.get("/",(req,res) =>{
    res.send('Hello world....');
})
app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(": " + port));
})