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
