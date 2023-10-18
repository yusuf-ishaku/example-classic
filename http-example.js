const {request} = require('http');

const req = request('http://www.google.com', (res) =>{
    res.on("data", (chunk) =>{
        console.log(`data is: ${chunk}`)
    });
    res.on('end', () =>{
        console.log("no more results")
    })
});

req.end();