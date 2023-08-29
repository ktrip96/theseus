import AllRequests from '@/modules/student/request/AllRequests'
import { getAllRequestsOfAStudent } from '@/pages/api/requests/request'
import { useQuery } from '@tanstack/react-query'

const MainStudentRequest = () => {
	return <AllRequests />
}

export default MainStudentRequest
