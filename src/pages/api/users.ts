import connectToDatabase from '../../../utils/database'
import type { NextApiRequest, NextApiResponse } from 'next'

type Test = {
	text: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Test>) {
	console.log('Request is : ', req.method)
	console.log('Connecting to Mongo')
	await connectToDatabase()
	console.log('Front End Success Connection')
	res.status(200).send({ text: 'Everyting ok!' })
}
