// 1-import express
// 2-create app = express()
///3 npm i nodemon
const express = require('express')



const app = express()

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, ()=>{
    console.log(`Server Listening on port ${server.address().port}`)
    console.log(`àpp Listening on port ${PORT}`)
});


server.on('error', (err)=>{
    console.log(`Cb: Error on server ${err}`)
});


app.get('/', (req,res)=>{
    res.send(`<h1 style="color:blue">Bienvenidos al Server de express</h1>`)
});

let visitas = 0;
app.get('/visitas', (req,res)=>{
    if (res){
        res.send({numberOfVisits : ++visitas})
    }
});


// new Date().toLocalString()
app.get('/fyh', (req,res)=>{
    res.send({FechayHora: new Date().toLocalString()})
});