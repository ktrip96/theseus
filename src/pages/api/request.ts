import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Request, { RequestType } from 'models/Request'
import { ApiResponse } from './student'

const handler = async (req: NextApiRequest, res: NextApiResponse<RequestType | ApiResponse>) => {
	try {
		await connectToDatabase()

		let response: ApiResponse
		let id: string

		switch (req.method) {
			case 'GET':
				const studentId = req.query.student as string | undefined
				const teacherId = req.query.teacher as string | undefined
				if (studentId) {
					const studentRequests = await Request.find({ student: studentId })
						.populate('teacher')
						.populate('thesis')
					response = {
						message: 'Success',
						isError: false,
						result: studentRequests,
					}
				} else if (teacherId) {
					const teacherRequests = await Request.find({ teacher: teacherId })
					response = {
						message: 'Success',
						isError: false,
						result: teacherRequests,
					}
				} else {
					const allRequests = await Request.find()
					response = {
						message: 'Success',
						isError: false,
						result: allRequests,
					}
				}
				break

			case 'POST':
				const { student, thesis, teacher } = req.body
				const existingRequest = await Request.findOne({ student, thesis })
				if (existingRequest) {
					response = {
						message: 'Request already exists for this student and thesis',
						isError: true,
					}
				} else {
					const newRequest: RequestType = new Request({
						student,
						thesis,
						teacher,
						status: 'pending', // Set the initial status as 'pending'
					})
					const savedRequest = await newRequest.save()
					response = {
						message: 'Request created successfully',
						isError: false,
						result: savedRequest,
					}
				}
				break

			case 'PUT':
				id = req.query.id as string
				const { status } = req.body
				const updatedRequest = await Request.findByIdAndUpdate(id, { status }, { new: true })
				if (!updatedRequest) {
					return res.status(404).json({
						message: 'Request not found',
						isError: true,
					})
				}
				response = {
					message: 'Request updated successfully',
					isError: false,
					result: updatedRequest,
				}
				break

			case 'DELETE':
				id = req.query.id as string
				const deletedRequest = await Request.findByIdAndDelete(id)
				if (!deletedRequest) {
					return res.status(404).json({
						message: 'Request not found',
						isError: true,
					})
				}
				response = {
					message: 'Request deleted successfully',
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
