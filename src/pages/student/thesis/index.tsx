import TableLoading from '@/components/TableLoading'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import AllThesis from '@/modules/student/allthesis/AllThesis'
import { getAllAvailableTheses } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const StudentThesisTablePage = () => {
	const { isError, isLoading } = useQuery(['allTheses'], () => getAllAvailableTheses())
	if (isError) return <h1>Error</h1>

	return (
		<div className='container mx-auto'>
			<div className='mt-2 mb-4'>
				<TypographyH4>Όλες οι διπλωματικές</TypographyH4>
			</div>
			{isLoading ? <TableLoading numberOfSkeletons={10} /> : <AllThesis />}
		</div>
	)
}

export default StudentThesisTablePage
