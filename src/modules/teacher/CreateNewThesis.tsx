import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createNewThesis } from '@/pages/api/requests/thesis'
import dynamic from 'next/dynamic'
import React, { useRef, useState } from 'react'

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview').then((mod) => mod.default), {
	ssr: false,
})
const markdown = ` This will be a template for a Dummy description
	
	A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

# Header test

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

const CreateNewThesis = () => {
	const [description, setDescription] = useState(markdown)
	const titleRef = useRef<HTMLInputElement>(null)
	const lessonRef = useRef<HTMLInputElement>(null)
	const flowRef = useRef<HTMLInputElement>(null)

	const handleSubmit = async () => {
		try {
			const body = {
				title: titleRef.current?.value,
				description: description,
				lesson: lessonRef.current?.value,
				status: 'available',
				flow: flowRef.current?.value,
				creator: '64dba4965ade85a2ab55541e',
			}
			await createNewThesis(body)
			alert('Success')
		} catch (e) {
			alert('Error')
		}
	}

	return (
		<div className=''>
			<TypographyH1>Δημιουργία Νέας Διπλωματικής</TypographyH1>
			<TypographyH4>Τίτλος</TypographyH4>
			<Input type='text' placeholder='Τίτλος' ref={titleRef} />
			<TypographyH4>Μάθημα</TypographyH4>
			<Input type='text' placeholder='Μάθημα' ref={lessonRef} />
			<TypographyH4>Ροή</TypographyH4>
			<Input type='text' placeholder='Ροή' ref={flowRef} />
			<Textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				className='min-h-[40vh]'
			/>
			<MarkdownPreview source={description} className='p-8 rounded-lg' />
			<Button size={'lg'} onClick={handleSubmit}>
				Υποβολή
			</Button>
		</div>
	)
}

export default CreateNewThesis
