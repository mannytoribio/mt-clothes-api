const admin = require('firebase-admin')
const creds = require('../credentials.json')

exports.connectDB = () => {
  if(!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(creds)
    })
  }
  return admin.firestore()
}