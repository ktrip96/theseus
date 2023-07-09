import connectToDatabase from '../../../utils/database'

export default async function handler(req, res) {
	console.log('Request is : ', req.method)
	console.log('Connecting to Mongo')
	await connectToDatabase()
	console.log('Front End Success Connection')
	res.json({ text: 'Everyting ok!' })
}
