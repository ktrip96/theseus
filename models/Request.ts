import { models, model, Document, Schema } from 'mongoose'
import { StudentType } from './Student'
import { ThesisType } from './Thesis'

export type RequestType = Document & {
	student: StudentType['_id']
	thesis: ThesisType['_id']
	status: string
}

const requestSchema = new Schema<RequestType>({
	student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
	thesis: { type: Schema.Types.ObjectId, ref: 'Thesis', required: true },
	status: { type: String, required: true },
})

const Request = models.Request || model('Request', requestSchema)

export default Request
