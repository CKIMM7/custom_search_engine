const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 3000

const fetch = require('./fetch');

app.use(cors())
app.use('/', express.static(path.join(__dirname, 'client')));

let reqPath = path.join(__dirname, '/client');
let errorPath = path.join(__dirname, '/client');

app.get('/', function(req, res) {
    
    res.sendFile(reqPath + '/index.html');
  });

app.get('/search/:name', async (req, res) =>{

    const googleData = await fetch.callGoogle(req.params.name);
    res.send(googleData)
})

app.get('*', function(req, res) {

    res.sendFile(errorPath + '/error.html');
  });

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
