import { ThesisStatus } from 'models/Thesis'

export type StudentThesisTableType = {
	id: string
	title: string
	date: string
	flow: string
	teacherName: string
}

export type TeacherMyThesisTableType = {
	id: string
	title: string
	status: ThesisStatus
}
