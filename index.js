const https = require('https');
const express = require('express');
var app = express();
const fs = require('fs');


app.get('/', (req,res) => {
    res.send('Hello HTTPS')
});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(3000, () => {
    console.log('listening on 3000')
})