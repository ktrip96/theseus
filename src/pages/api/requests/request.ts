import axios from 'axios'
import { ApiResponse } from '../student'
import { RequestType } from 'models/Request'

export const createNewRequest = (
	studentID: string,
	thesisID: string,
	teacherID: string
): Promise<ApiResponse<RequestType>> => {
	const postBody = { student: studentID, thesis: thesisID, teacher: teacherID }
	const url = '/api/request'
	return axios.post(url, postBody).then((r) => r.data)
}
