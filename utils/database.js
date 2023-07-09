const mongoose = require('mongoose')
require('dotenv').config()

const databaseURI = process.env.MONGODB_URI

let connection = null

async function connectToDatabase() {
	if (connection) return connection
	try {
		connection = await mongoose.connect(databaseURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to MongoDB')
		return connection
	} catch (error) {
		console.error('Error connecting to MongoDB:', error)
		throw error
	}
}

module.exports = connectToDatabase
