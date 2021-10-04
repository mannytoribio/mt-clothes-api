// connect to database
const { connectDB } = require('./db')

const CLOTHES_COLLECTION = 'clothes'
const db = connectDB()

// get all products
// takes req(uest) & res(ponse)
exports.getAllProducts = (req, res) => {
  db.collection(CLOTHES_COLLECTION).get()
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

exports.getPrductById = (req, res) => {
  const { id } = req.params

  db.collection(CLOTHES_COLLECTION).doc(id).get()
  .then(doc => {
    let product = doc.data()
    product.id = doc.id
    res.send(product)
  })
  .catch(error => res.status(500).send(error))
}

// create a new product

exports.createProduct = (req, res) => {
  const newProduct = req.body
  db.collection(CLOTHES_COLLECTION).add(newProduct)
  .then(docRef => {
    let product = req.body
    product.id = docRef.id
    res.send(product)
  })
}

// update a single product

exports.updateProduct = (req, res) => {
  const product = req.body
  const { id } = req.params
  db.collection(CLOTHES_COLLECTION).doc(id).update(product)
  .then(() => this.getPrductById(req,res))
  .catch(error => res.status(500).send(error))
}

// delete a single product

exports.deleteProduct = (req, res) => {
  const { id } = req.params
  db.collection(CLOTHES_COLLECTION).doc(id).delete()
  .then(timeStamp => {
  res.status(200).send(`Product ${id} nuked at ${timeStamp}`) 
  })
  .catch(error => res.status(500).send(error))
}