import axios from 'axios'
import { ApiResponse } from '../student'
import { ThesisType } from 'models/Thesis'

export const getAllTheses = (): Promise<ApiResponse<ThesisType[]>> => {
	const url = '/api/thesis'
	return axios.get(url).then((r) => r.data)
}
