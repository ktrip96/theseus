import { Schema, model, models, Document } from 'mongoose'

export type TeacherType = Document & {
	name: string
	email: string
}

const teacherSchema = new Schema<TeacherType>({
	name: { type: String, required: true },
	email: { type: String, required: true },
})

const Teacher = models.Teacher || model('Teacher', teacherSchema)

export default Teacher
