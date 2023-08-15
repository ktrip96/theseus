import { Schema, model, models, Document } from 'mongoose'

export type StudentType = Document & {
	name: string
	email: string
}

const studentSchema = new Schema<StudentType>({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
})

const Student = models.Student || model('Student', studentSchema)

export default Student
