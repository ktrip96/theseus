import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex gap-3'>
			<Link href='/student'>
				<button className='border p-2 shadow-md rounded-md'>Student</button>
			</Link>
			<Link href='/teacher'>
				<button className='border p-2 shadow-md rounded-md'>Teacher</button>
			</Link>
			<Link href='/sudoteacher'>
				<button className='border p-2 shadow-md rounded-md'>SudoTeacher</button>
			</Link>
			<Link href='/secretary'>
				<button className='border p-2 shadow-md rounded-md'>Secretary</button>
			</Link>
		</div>
	)
}
