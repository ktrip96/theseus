import axios from 'axios'
import { ApiResponse } from '../student'
import { ThesisType } from 'models/Thesis'

export const getAllAvailableTheses = (): Promise<ApiResponse<ThesisType[]>> => {
	const url = '/api/thesis?status=available'
	return axios.get(url).then((r) => r.data)
}

export const getSingleThesis = (thesisID: string | string[]): Promise<ApiResponse<ThesisType[]>> => {
	const url = `/api/thesis?id=${thesisID}`
	return axios.get(url).then((r) => r.data)
}

export const setSingleThesis = (
	thesisID: string | string[],
	updatedBody: any
): Promise<ApiResponse<ThesisType>> => {
	const url = `/api/thesis?id=${thesisID}`
	return axios.put(url, updatedBody).then((r) => r.data)
}
