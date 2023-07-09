// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Thesis, { ThesisType } from 'models/Thesis'

export type ErrorResponse = {
	error: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ThesisType | ErrorResponse>) => {
	if (req.method === 'POST') {
		try {
			// Connect to the database
			await connectToDatabase()

			// Create a new thesis instance
			const newThesis: ThesisType = new Thesis({
				title: req.body.title,
				description: req.body.description,
				lesson: req.body.lesson,
				status: req.body.status,
				teacher: req.body.teacher,
				flow: req.body.flow,
			})

			// Save the new thesis to the database
			const savedThesis = await newThesis.save()

			// Return the saved thesis as the response
			res.status(201).json(savedThesis)
		} catch (error) {
			// Handle any errors that occur during the process
			console.log('Mongoose error: ', error)
			res.status(500).json({ error: 'An error occurred while creating the thesis.' })
		}
	} else {
		// Handle unsupported HTTP methods
		res.status(405).json({ error: 'Method not allowed' })
	}
}

export default handler
