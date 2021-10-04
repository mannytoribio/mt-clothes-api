// connect to database
const { connectDB } = require('./db')

// get all products
// takes req(uest) & res(ponse)
exports.getAllProducts = (req, res) => {
  const db = connectDB()
  db.collection('clothes').get()
    .then(collection => {
      const products = collection.docs.map(doc => {
        let product = doc.data()
        product.id = doc.id
        return product
      })
      res.send(products)
    })
    .catch(err => res.status(500).send(err))
}

// get a single prodduct

// create a new product

// update a single product

// delete a single product