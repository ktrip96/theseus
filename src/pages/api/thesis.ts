import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Thesis, { ThesisType } from 'models/Thesis'

export type MessageResponse = {
	message: string
	isError: boolean
	result?: any
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ThesisType | MessageResponse>) => {
	try {
		await connectToDatabase()

		let response: MessageResponse
		let id: string // Declare id variable here

		switch (req.method) {
			case 'GET':
				const allTheses = await Thesis.find()
				response = {
					message: 'Success',
					isError: false,
					result: allTheses,
				}
				break

			case 'POST':
				const { title, description, lesson, status, flow, creator } = req.body
				const newThesis: ThesisType = new Thesis({
					title,
					description,
					lesson,
					creationDate: new Date(),
					status,
					flow,
					creator,
				})
				const savedThesis = await newThesis.save()
				response = {
					message: 'Thesis created successfully',
					isError: false,
					result: savedThesis,
				}
				break

			case 'PUT':
				id = req.query.id as string // Assign the id here
				const updatedThesis = await Thesis.findByIdAndUpdate(id, req.body, { new: true })
				if (!updatedThesis) {
					return res.status(404).json({
						message: 'Thesis not found',
						isError: true,
					})
				}
				response = {
					message: 'Thesis updated successfully',
					isError: false,
					result: updatedThesis,
				}
				break

			case 'DELETE':
				id = req.query.id as string // Assign the id here
				const deletedThesis = await Thesis.findByIdAndDelete(id)
				if (!deletedThesis) {
					return res.status(404).json({
						message: 'Thesis not found',
						isError: true,
					})
				}
				response = {
					message: 'Thesis deleted successfully',
					isError: false,
				}
				break

			default:
				response = {
					message: 'Method not allowed',
					isError: true,
				}
				break
		}

		res.json(response)
	} catch (error) {
		console.error('Mongoose error: ', error)
		res.status(500).json({
			message: 'An error occurred while processing the request.',
			isError: true,
		})
	}
}

export default handler
