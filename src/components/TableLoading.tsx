import React from 'react'

type Props = {
	numberOfSkeletons: number
}

const TableLoading = ({ numberOfSkeletons }: Props) => {
	const skeletonArray = new Array(numberOfSkeletons).fill('')
	return (
		<div>
			{skeletonArray.map((_, index) => (
				<div key={index} className='mt-4 flex gap-2 items-center'>
					<div className='h-10 bg-gray-200 animate-pulse rounded-full w-full' />
				</div>
			))}
		</div>
	)
}

export default TableLoading
