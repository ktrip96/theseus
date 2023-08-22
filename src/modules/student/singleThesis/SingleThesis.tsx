import React from 'react'
import { useRouter } from 'next/router'
import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { TypographyH3 } from '@/components/typographies/TypographyH3'
import dynamic from 'next/dynamic'
import '@uiw/react-markdown-preview/markdown.css'
import { Button } from '@/components/ui/button'
import { getSingleThesis } from '@/pages/api/requests/thesis'
import { useQuery, useMutation } from '@tanstack/react-query'

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
						<Button className='px-8'>Αίτηση</Button>
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
