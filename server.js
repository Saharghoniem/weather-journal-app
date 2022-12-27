


projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
const { request } = require('express');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
// بتشغل السيرفر
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };


// GET route

function getData (request, response) {
  response.send(projectData);
};
app.get('/all', getData);

// post
const postData = (request,response) =>{
projectData= request.body;
  response.send(projectData);
  console.log(projectData)
}
app.post('/add', postData);
