import { Schema, model, models, Document } from 'mongoose'
import { TeacherType } from './Teacher'

type ThesisStatus = 'available' | 'inprogress' | 'completed'
export type FlowType = 'Λ' | 'Υ' | 'Ε' | 'Ζ' | 'Τ'

export type ThesisType = {
	title: string
	description: string
	lesson: string
	creationDate: string
	status: ThesisStatus
	flow: FlowType
	creator: TeacherType['_id']
}

export type MongoThesisType = Document & ThesisType

const thesisSchema = new Schema<MongoThesisType>({
	title: {
		type: String,
		required: true,
		unique: true,
	},
	description: {
		type: String,
		required: true,
	},
	lesson: {
		type: String,
		required: true,
	},
	creationDate: {
		type: String,
		default: Date.now.toString(),
	},
	status: {
		type: String,
		enum: ['availalbe', 'inprogress', 'completed'],
		required: true,
	},

	flow: {
		type: String,
		enum: ['Υ', 'Λ', 'Ζ', 'Ε'],
		required: true,
	},
	creator: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
})

const Thesis = models.Thesis || model('Thesis', thesisSchema)

export default Thesis
