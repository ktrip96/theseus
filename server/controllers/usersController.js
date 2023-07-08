const User = require('../models/User')

async function createUser(req, res) {
	try {
		const newUser = new User(req.body)
		await newUser.save()
		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).json({ error: 'Failed to create user' })
	}
}

async function test(req, res) {
	try {
		res.status(200).json({ text: 'OK!!!' })
	} catch (error) {
		res.status(500).json({ error: 'Failed to create user' })
	}
}

module.exports = { createUser, test }
