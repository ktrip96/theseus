import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Thesis, { MongoThesisType, ThesisType } from 'models/Thesis'
import { ApiResponse } from './student'

const handler = async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
	try {
		await connectToDatabase()

		let response: ApiResponse
		let id: string

		switch (req.method) {
			case 'GET':
				let getResult
				const thesisId = req.query.id
				const teacherId = req.query.teacherId
				// Return the data for a single Thesis
				if (thesisId !== undefined) getResult = await Thesis.find({ _id: thesisId }).populate('creator')
				else if (teacherId !== undefined) getResult = await Thesis.find({ creator: teacherId })
				else {
					// Return all the thesis with a specific status
					if (req.query.status !== undefined)
						getResult = await Thesis.find({ status: req.query.status }).populate('creator')
					// Return all the thesis
					else getResult = await Thesis.find().populate('creator')
				}
				response = {
					message: 'Success',
					isError: false,
					result: getResult,
				}
				break

			case 'POST':
				const { title, description, lesson, status, flow, creator } = req.body
				const newThesis: MongoThesisType = new Thesis({
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
				id = req.query.id as string
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
				id = req.query.id as string
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
