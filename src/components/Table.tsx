import React from 'react'

type Props = {}

const Table = (props: Props) => {
	return (
		<div>
			<h4 className='font-semibold text-lg'>Table Component</h4>
			<table className='w-full border border-gray-200 rounded-md  drop-shadow-sm shadow-md'>
				<thead className=' bg-gray-50'>
					<tr>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>No.</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>Τίτλος</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>Κατάσταση</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>Ημερομηνία</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>Ροή</th>
						<th className='p-3 text-sm font-semibold tracking-wide text-left'>Ροή</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-white'>
						<td className='p-3 text-xs text-gray-700'>123</td>
						<td className='p-3 text-xs text-gray-700'>
							Δημιουργώντας το επόμενο Facebook με τη γλώσσα Typescript Δημιουργώντας το επόμενο Facebook με τη
							γλώσσα Typescript Δημιουργώντας το επόμενο Facebook με τη γλώσσα Typescript
						</td>
						<td className='p-3 text-xs '>
							<span className='p-2 tracking-wider font-semibold uppercase text-green-800 bg-green-200 rounded-lg bg-opacity-50  '>
								διαθεσιμη
							</span>
						</td>
						<td className='p-3 text-xs text-gray-700 font-semibold'>10/10/2023</td>
						<td className='p-3 text-xs text-blue-500 font-semibold'>Λ</td>
					</tr>
					<tr className='bg-gray-50'>
						<td className='p-3 text-xs text-gray-700'>123</td>
						<td className='p-3 text-xs text-gray-700'>
							Δημιουργώντας το επόμενο Facebook με τη γλώσσα Typescript
						</td>
						<td className='p-3 text-[0.6rem] '>
							<span className='p-2 tracking-wider font-semibold uppercase text-green-800 bg-green-200 rounded-lg bg-opacity-50  '>
								διαθεσιμη
							</span>
						</td>
						<td className='p-3 text-xs text-gray-700'>10/10/2023</td>
						<td className='p-3 text-xs text-gray-700'>Λ</td>
					</tr>
					<tr className='bg-white'>
						<td className='p-3 text-xs text-gray-700'>123</td>
						<td className='p-3 text-xs text-gray-700'>
							Δημιουργώντας το επόμενο Facebook με τη γλώσσα Typescript
						</td>
						<td className='p-3 text-xs '>
							<span className='p-2 tracking-wider font-semibold uppercase text-green-800 bg-green-200 rounded-lg bg-opacity-50  '>
								διαθεσιμη
							</span>
						</td>
						<td className='p-3 text-xs text-gray-700'>10/10/2023</td>
						<td className='p-3 text-xs text-gray-700'>Λ</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
