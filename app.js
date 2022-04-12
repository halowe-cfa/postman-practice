const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Express Serving Running')
   
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//create a post request for a new route called user-info in your app.js
//go to postman and choose a post request
//create a key called username
//add a random username for your pretend user
//create a key called name
//add a name for your pretend user
//create a key called location
//add a location for your pretend user
//send your post request
//take a screenshot and upload it with the link to your repo

