import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Student, { StudentType } from 'models/Student'

export type ApiResponse<T = any> = {
	message: string
	isError: boolean
	result?: T
}

const handler = async (req: NextApiRequest, res: NextApiResponse<StudentType | ApiResponse>) => {
	try {
		await connectToDatabase()

		let response: ApiResponse
		let id: string

		switch (req.method) {
			case 'GET':
				const allStudents = await Student.find()
				response = {
					message: 'Success',
					isError: false,
					result: allStudents,
				}
				break

			case 'POST':
				const newStudent: StudentType = new Student({
					name: req.body.name,
					email: req.body.email,
				})
				const savedStudent = await newStudent.save()
				response = {
					message: 'Created the student successfully',
					isError: false,
					result: savedStudent,
				}
				break

			case 'PUT':
				id = req.query.id as string
				const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true })
				response = {
					message: 'Updated Successfully',
					isError: false,
					result: updatedStudent,
				}
				break

			case 'DELETE':
				id = req.query.id as string
				await Student.findByIdAndDelete(id)
				response = {
					message: 'Deleted the user successfully',
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
		res.status(500).json({ message: 'An error occurred while processing the request.', isError: true })
	}
}

export default handler
