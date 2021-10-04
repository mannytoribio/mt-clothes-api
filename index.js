const express = require('express')
const { getAllProducts, getPrductById, createProduct, updateProduct, deleteProduct } = require('./src/products')

const app = express()
app.use(express.json())


// take a request and response for a single endpoint
// .get is for get requests, takes the end point as the first parameter and the request/response package as a second parameter
// app.get('/products', (req, res) => getAllProducts(req, res)); short hand version below:
app.get('/products/:id', getPrductById)
app.patch('/products/:id', updateProduct)
app.delete('/products/:id', deleteProduct)
app.get('/products', getAllProducts)
app.post('/products', createProduct)

//opens port and listen to requests coming through this port. The console log confirms that the program is listening
app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})