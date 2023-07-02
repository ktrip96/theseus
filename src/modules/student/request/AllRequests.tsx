import { TypographyH4 } from '@/components/typographies/TypographyH4'
import { studentRequests } from '@/mock/mockStudentRequests'
import React from 'react'
import { RequestTable } from './components/RequestTable'
import { StudentRequestColumns } from './components/RequestColumns'

const AllRequests = () => {
	//	TODO: Fetch Requests
	//  if requests.length === 0, display the appropriate message
	return (
		<div className='container mx-2 '>
			<div className='mt-2 mb-4'>
				<TypographyH4>Οι αιτήσεις μου</TypographyH4>
			</div>
			<RequestTable columns={StudentRequestColumns} data={studentRequests} />
		</div>
	)
}

export default AllRequests
