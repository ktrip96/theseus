import { getSingleTeacherThesis } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { TeacherMyThesisTable } from './components/TeacherMyThesisTable'
import { TeacherMyThesisColumns } from './components/TeacherMyThesisColumns'

type Props = {}

const MyThesis = (props: Props) => {
	const { data, isLoading, isError } = useQuery(['myThesis', '64db66c95ade85a2ab5553ea'], () =>
		getSingleTeacherThesis('64db66c95ade85a2ab5553ea')
	)

	if (isLoading || isError) return null

	return (
		<div>
			<TeacherMyThesisTable columns={TeacherMyThesisColumns} data={data?.result!} />
		</div>
	)
	// <StudentThesisTable columns={AllThesisStudentColumns} data={filteredThesis}
}

export default MyThesis
