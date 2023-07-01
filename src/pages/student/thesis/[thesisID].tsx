import React from 'react'
import { useRouter } from 'next/router'
import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { mockRandomThesis } from '@/mock/mockThesisTable'
import { TypographyH3 } from '@/components/typographies/TypographyH3'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import { TypographyP } from '@/components/typographies/TypographyP'
import dynamic from 'next/dynamic'
// import '@uiw/react-markdown-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'
import { Button } from '@/components/ui/button'
import { mockSingleThesis } from '@/mock/mockSIngleThesis'

// const MarkdownEditor = dynamic(() => import('@uiw/react-markdown-editor').then((mod) => mod.default), {
// 	ssr: false,
// })

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
	ssr: false,
})

const SingleThesis = () => {
	const router = useRouter()
	const thesisID = router.query.thesisID

	//	TODO: API call or Sth to get Thesis Info

	const testTitle =
		'Ανάπτυξη αλγορίθμων για τη δέσμευση δικτυακών και υπολογιστικών πόρων για την εξυπηρέτηση των εφαρμογών βάση των προθέσεών τους '

	return (
		<div className='w-full'>
			<header className=' text-center border-b border-gray-200  pt-12 pb-6'>
				{testTitle.length < 100 ? (
					<TypographyH1>{testTitle}</TypographyH1>
				) : (
					<TypographyH3>{testTitle}</TypographyH3>
				)}
				<div className='mt-6 flex justify-between  items-center'>
					<div className='flex gap-4'>
						<p className='font-bold'>{mockRandomThesis.teacher}</p>
						<p>{mockRandomThesis.lesson}</p>
					</div>
					<Button className='px-8'>Αίτηση</Button>
				</div>
			</header>

			<MarkdownPreview source={mockSingleThesis} className='p-8 rounded-lg' />
		</div>
	)
}

export default SingleThesis
