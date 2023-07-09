import { Schema, model, models, Document } from 'mongoose'

type ThesisStatus = '0' | '1' | '2'
export type FlowType = 'Λ' | 'Υ' | 'Ε' | 'Ζ'

export type ThesisType = Document & {
	title: string
	description: string
	lesson: string
	creationDate: Date
	status: ThesisStatus
	teacher: string
	flow: FlowType
}

const thesisSchema = new Schema<ThesisType>(
	{
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
			type: Date,
			default: Date.now,
		},
		status: {
			type: String,
			enum: ['0', '1', '2'],
			required: true,
		},
		teacher: {
			type: String,
			required: true,
		},
		flow: {
			type: String,
			enum: ['Υ', 'Λ', 'Ζ', 'Ε'],
			required: true,
		},
	},
	{
		collection: 'Thesis',
	}
)

const Thesis = models.Thesis || model('Thesis', thesisSchema)

export default Thesis
