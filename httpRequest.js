const { get } = require('http');

get('http://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`data chunk: ${chunk}`);
    });
    res.on('end',()=>{
        console.log("end of data");
    })
})

