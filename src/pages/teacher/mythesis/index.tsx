import TableLoading from '@/components/TableLoading'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import MyThesis from '@/modules/teacher/mythesis/MyThesis'
import { getSingleTeacherThesis } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AllMyThesis = () => {
	//	TODO: Replace xerato ID with useAuth id
	const { isError, isLoading } = useQuery(['myThesis', '64db66c95ade85a2ab5553ea'], () =>
		getSingleTeacherThesis('64db66c95ade85a2ab5553ea')
	)
	if (isError) return <h4>Error</h4>

	return (
		<div className='container mx-auto'>
			<div className='mt-2 mb-4'>
				<TypographyH4>Οι διπλωματικές μου</TypographyH4>
			</div>
			{isLoading ? <TableLoading numberOfSkeletons={10} /> : <MyThesis />}
		</div>
	)
}

export default AllMyThesis
