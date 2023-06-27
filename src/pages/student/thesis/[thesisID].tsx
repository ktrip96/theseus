import React from 'react'
import { useRouter } from 'next/router'
import { TypographyH1 } from '@/components/typographies/TypographyH1'

const SingleThesis = () => {
	const router = useRouter()
	const thesisID = router.query.thesisID
	return (
		<div>
			<TypographyH1>{thesisID}</TypographyH1>
		</div>
	)
}

export default SingleThesis
