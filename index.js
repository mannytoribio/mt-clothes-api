const express = require('express')
const { getAllProducts } = require('./src/products')

const app = express()



// take a request and response for a single endpoint
// .get is for get requests, takes the end point as the first parameter and the request/response package as a second parameter
// app.get('/products', (req, res) => getAllProducts(req, res)); short hand version below:
app.get('/products', getAllProducts)



//opens port and listen to requests coming through this port. The console log confirms that the program is listening
app.listen(3000, () => {
  console.log('Listening on http://localhost:3000/')
})