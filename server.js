// Setup empty JS object to act as endpoint for all routes
 const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Port declared here
const port = 3030;

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${ port }`);
};

// Initialize all route with a callback function
app.get('/all', sendData);


// Callback function to complete GET '/all'
function sendData(req, res){
    res.send(projectData);
};

// Post Route
app.post('/add', addData);

function addData (req, res) {
    newEntry = {
        temperature: req.body.temperature,
        date: req.body.date,
        content: req.body.content,
    };

    projectData = NewEntry;
    res.send(projectData);
}
