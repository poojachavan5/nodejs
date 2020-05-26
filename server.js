const express = require('express')
const server = express()
const body_parser = require('body-parser')

const { port } = require('./config/common/config');



const path = require('path')
const bodyParser = require('body-parser') // grabs information from the POST data form.
const cors = require('cors')
const mongoose = require('mongoose')




const app = require('./app');
// CORS Middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.json())

// Set Public Folder
app.use(express.static(path.join(__dirname, 'public')))


// Server Routes
app.get('/', (req, res) => {
    res.send('Error: Cannot reach for public files!')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, publicUrl))
})

server.use(body_parser.json());

app.listen(port, () => {
  console.log(`Application is running on http://localhost:${port}`);
});


