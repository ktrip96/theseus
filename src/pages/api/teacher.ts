import type { NextApiRequest, NextApiResponse } from 'next'
import connectToDatabase from 'utils/database'
import Teacher, { TeacherType } from 'models/Teacher'
import { ApiResponse } from './student'

const handler = async (req: NextApiRequest, res: NextApiResponse<TeacherType | ApiResponse>) => {
	try {
		await connectToDatabase()

		let response: ApiResponse
		let id: string // Declare id variable here

		switch (req.method) {
			case 'GET':
				const allTeachers = await Teacher.find()
				response = {
					message: 'Success',
					isError: false,
					result: allTeachers,
				}
				break

			case 'POST':
				const newTeacher: TeacherType = new Teacher({
					name: req.body.name,
					email: req.body.email,
				})
				const savedTeacher = await newTeacher.save()
				response = {
					message: 'Created the teacher successfully',
					isError: false,
					result: savedTeacher,
				}
				break

			case 'PUT':
				id = req.query.id as string
				const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true })
				response = {
					message: 'Updated Successfully',
					isError: false,
					result: updatedTeacher,
				}
				break

			case 'DELETE':
				id = req.query.id as string
				await Teacher.findByIdAndDelete(id)
				response = {
					message: 'Deleted the user successfully',
					isError: false,
				}
				break

			default:
				response = {
					message: 'Method not allowed',
					isError: false,
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
