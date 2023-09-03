import React from 'react'
import { useRouter } from 'next/router'
import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { TypographyH3 } from '@/components/typographies/TypographyH3'
import dynamic from 'next/dynamic'
import '@uiw/react-markdown-preview/markdown.css'
import { Button } from '@/components/ui/button'
import { getSingleThesis } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'
import { createNewRequest } from '@/pages/api/requests/request'

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
	ssr: false,
})

const SingleThesis = () => {
	const router = useRouter()
	const thesisID = router.query.thesisID
	const { data } = useQuery(['singleThesis', thesisID], () => getSingleThesis(thesisID!))
	const { result } = data!

	if (result === undefined) return null

	const { title, creator, lesson, description, status } = result[0]

	const handleRequest = async () => {
		try {
			//	TODO : Handle Loading + Error State
			//	TODO: Replace XERATO ID with Normal Id that I will get from my GlobalState
			const response = await createNewRequest('64db64885ade85a2ab5553da', result[0]._id, creator._id)
			console.log('Response : ', response)
		} catch (error) {
			console.log('Error', error)
		}
	}

	return (
		<div className='w-full'>
			<header className=' text-center border-b border-gray-200  pt-12 pb-6'>
				{title.length < 100 ? <TypographyH1>{title}</TypographyH1> : <TypographyH3>{title}</TypographyH3>}
				<div className='mt-6 flex justify-between  items-center'>
					<div className='flex gap-4'>
						<p className='font-bold'>{creator.name}</p>
						<p>{lesson}</p>
					</div>
					{status === 'available' ? (
						<Button className='px-8' onClick={handleRequest}>
							Αίτηση
						</Button>
					) : (
						<Button disabled className='px-8'>
							{status}
						</Button>
					)}
				</div>
			</header>

			<MarkdownPreview source={description} className='p-8 rounded-lg' />
		</div>
	)
}

export default SingleThesis
