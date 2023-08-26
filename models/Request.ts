import { models, model, Document, Schema } from 'mongoose'
import { StudentType } from './Student'
import { MongoThesisType } from './Thesis'

export type RequestType = Document & {
	student: StudentType['_id']
	thesis: MongoThesisType['_id']
	teacher: MongoThesisType['_id']
	status: string
}

const requestSchema = new Schema<RequestType>({
	student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
	thesis: { type: Schema.Types.ObjectId, ref: 'Thesis', required: true },
	teacher: { type: Schema.Types.ObjectId, ref: 'Thesis', required: true },
	status: { type: String, required: true },
})

const Request = models.Request || model('Request', requestSchema)

export default Request
