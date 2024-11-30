const express = require('express')
const app = express();
const db =require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

const PORT = process.env.port || 3000;



app.get('/', function (req, res) {
  res.send('Hello World')
})

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


const personRoutes = require('./routes/personRoutes');

app.use('/person',personRoutes);



app.listen(PORT,()=>{
    console.log("listening on port 3000");
})