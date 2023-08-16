import SingleThesis from '@/modules/student/singleThesis/SingleThesis'
import { getSingleThesis } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const ThesisWrapper = () => {
	const router = useRouter()
	const thesisID = router.query.thesisID

	if (thesisID === undefined) {
		// Early return if thesisID is undefined
		return <h1>Loading...</h1>
	}

	return <SingleThesisContainer thesisID={thesisID} />
}

const SingleThesisContainer = ({ thesisID }: { thesisID: string | string[] }) => {
	const { isError, isLoading } = useQuery(['singleThesis', thesisID], () => getSingleThesis(thesisID))

	if (isError) return <h1>Error</h1>
	if (isLoading) return <h1>Loading</h1>

	return <SingleThesis />
}

export default ThesisWrapper
