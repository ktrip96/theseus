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

export const deleteRequest = (requestID: string) => {
	const url = `/api/request?id=${requestID}`
	return axios.delete(url).then((r) => r.data)
}

export const getAllRequestsOfAStudent = (studentID: string): Promise<ApiResponse<RequestType[]>> => {
	const url = `/api/request?student=${studentID}`
	return axios.get(url).then((r) => r.data)
}
