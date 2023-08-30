import { TypographyH4 } from '@/components/typographies/TypographyH4'
import React from 'react'
import { RequestTable } from './components/RequestTable'
import { StudentRequestColumns } from './components/RequestColumns'
import { useQuery } from '@tanstack/react-query'
import { getAllRequestsOfAStudent } from '@/pages/api/requests/request'
import { formatDate } from '@/lib/utils'

const AllRequests = () => {
	//	TODO: Replace Xerato ID with authID
	//	TODO: Loading and Error States
	//	TODO: Replace Xerato Date with the real date. (I need to add another field on the Request Model)
	const { isLoading, isError, data } = useQuery(['studentRequests', '64db64885ade85a2ab5553de'], () =>
		getAllRequestsOfAStudent('64db64885ade85a2ab5553de')
	)

	if (isLoading) return <h1>Loading</h1>

	if (isError) return <h1>Error</h1>

	if (data.result === undefined) return null

	const transformedRequests = data.result.map((d) => {
		{
			return {
				id: d._id,
				status: d.status,
				teacherName: d.teacher.name,
				thesisId: d.thesis,
				thesisTitle: d.thesis.title,
				date: formatDate(d.thesis.creationDate),
			}
		}
	})
	return (
		<div className='container mx-2 '>
			{transformedRequests.length === 0 ? (
				<h1>No requests</h1>
			) : (
				<>
					<div className='mt-2 mb-4'>
						<TypographyH4>Οι αιτήσεις μου</TypographyH4>
					</div>
					<RequestTable columns={StudentRequestColumns} data={transformedRequests} />
				</>
			)}
		</div>
	)
}

export default AllRequests
