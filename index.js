const fs = require('fs');

const Container = require('./container.js')
const container = new Container('products')

const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080;

const server = app.listen( PORT, ()=>{
    console.log(`Server Listening on port ${server.address().port}`)
});

server.on('error', (err)=>{
    console.log(`Cb: Error on server ${err}`)
});


const fileReader = async () => {
    const data = await fs.promises.readFile('products.txt', 'utf8')
    const products = JSON.parse(data)

    useSaveMethod(products)
    // useGetByIdMethod(products)
    getRandom(products)
}
fileReader();

const useSaveMethod = (products) => {
    products.forEach(product => {
        container.save(product)
    })
    dataGet(container.getAll())
}

const dataGet = data => app.get("/products", (req, res) => {
    res.send(data)
});

const getRandom = products => app.get('/randomProduct', (req,res) => {
    const id = Math.floor(Math.random() * products.length+1)
    res.json(container.getById(id))
});



