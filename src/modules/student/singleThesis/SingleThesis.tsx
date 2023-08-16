import React from 'react'
import { useRouter } from 'next/router'
import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { TypographyH3 } from '@/components/typographies/TypographyH3'
import dynamic from 'next/dynamic'
import '@uiw/react-markdown-preview/markdown.css'
import { Button } from '@/components/ui/button'
import { mockSingleThesis } from '@/mock/mockSIngleThesis'
import { getSingleThesis } from '@/pages/api/requests/thesis'
import { useQuery } from '@tanstack/react-query'

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
	ssr: false,
})

const SingleThesis = () => {
	const router = useRouter()
	const thesisID = router.query.thesisID
	const { data } = useQuery(['singleThesis', thesisID], () => getSingleThesis(thesisID!))
	const { result } = data!

	if (result === undefined) return null

	//	TODO: Button Αίτηση should be conditional. Αν έχει κάνει ήδη αίτηση πρέπει να λέει ακύρωση αίτησης

	const testTitle =
		'Ανάπτυξη αλγορίθμων για τη δέσμευση δικτυακών και υπολογιστικών πόρων για την εξυπηρέτηση των εφαρμογών βάση των προθέσεών τους '

	return (
		<div className='w-full'>
			<header className=' text-center border-b border-gray-200  pt-12 pb-6'>
				{testTitle.length < 100 ? (
					<TypographyH1>{result[0].title}</TypographyH1>
				) : (
					<TypographyH3>{result[0].title}</TypographyH3>
				)}
				<div className='mt-6 flex justify-between  items-center'>
					<div className='flex gap-4'>
						<p className='font-bold'>{result[0].creator.name}</p>
						<p>{result[0].lesson}</p>
					</div>
					<Button className='px-8'>Αίτηση</Button>
				</div>
			</header>

			<MarkdownPreview source={result[0].description} className='p-8 rounded-lg' />
		</div>
	)
}

export default SingleThesis
