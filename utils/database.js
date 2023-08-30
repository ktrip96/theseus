const mongoose = require('mongoose')
require('dotenv').config()
const Request = require('models/Request')
const Student = require('models/Student')
const Teacher = require('models/Teacher')
const Thesis = require('models/Thesis')

const databaseURI = process.env.MONGODB_URI

let connection = null

async function connectToDatabase() {
	if (connection) return connection
	try {
		connection = await mongoose.connect(databaseURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		// model registration
		Teacher
		Student
		Thesis
		Request

		console.log('Connected to MongoDB')
		return connection
	} catch (error) {
		console.error('Error connecting to MongoDB:', error)
		throw error
	}
}

module.exports = connectToDatabase
