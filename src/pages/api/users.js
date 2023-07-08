import { createUser } from '../../server/controllers/usersController'

export default function handler(req, res) {
	if (req.method === 'POST') {
		createUser(req, res)
	} else {
		res.status(405).json({ error: 'Method not allowed' })
	}
}
