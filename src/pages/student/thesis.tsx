import Table from '@/components/Table'
import React from 'react'
import { BsFilter } from 'react-icons/bs'

type Props = {}

const thesis = (props: Props) => {
	return (
		<div>
			<button className='flex gap-2 items-center my-6 text-xs text-gray-600 hover:text-black bg-zinc-100 font-semibold border border-gray-200 py-2 px-4 rounded-md shadow-md hover:drop-shadow-lg transition duration-200'>
				Φίλτρα <BsFilter size={16} />
			</button>
			<Table />
		</div>
	)
}

export default thesis
