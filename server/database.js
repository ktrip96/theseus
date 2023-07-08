const mongoose = require('mongoose')
require('dotenv').config()

const databaseURI = process.env.MONGODB_URI
console.log('Database URI', databaseURI)

async function connectToDatabase() {
	try {
		await mongoose.connect(databaseURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to MongoDB')
	} catch (error) {
		console.error('Error connecting to MongoDB:', error)
	}
}

module.exports = connectToDatabase
