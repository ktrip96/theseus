import axios from 'axios'
import { ApiResponse } from '../student'
import { ThesisType } from 'models/Thesis'
import { TeacherMyThesisTableType } from '@/types/thesis'

//	TODO : Maybe I should replace ThesisType with MongoThesisType in order to have access to the other stuff that MongoGives.
//	And I also have to remove _id, from the ThesisType.

export const getAllAvailableTheses = (): Promise<ApiResponse<ThesisType[]>> => {
	const url = '/api/thesis?status=available'
	return axios.get(url).then((r) => r.data)
}

export const getSingleThesis = (thesisID: string | string[]): Promise<ApiResponse<ThesisType[]>> => {
	const url = `/api/thesis?id=${thesisID}`
	return axios.get(url).then((r) => r.data)
}

export const getSingleTeacherThesis = (
	teacherId: string
): Promise<ApiResponse<TeacherMyThesisTableType[]>> => {
	const url = `/api/thesis?teacherId=${teacherId}`
	return axios.get(url).then((r) => r.data)
}

export const setSingleThesis = (
	thesisID: string | string[],
	updatedBody: any
): Promise<ApiResponse<ThesisType>> => {
	const url = `/api/thesis?id=${thesisID}`
	return axios.put(url, updatedBody).then((r) => r.data)
}

export const createNewThesis = (body: any) => {
	const url = '/api/thesis'
	return axios.post(url, body).then((r) => r.data)
}
