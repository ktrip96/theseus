import Header from '@/containers/Header'
import Layout from '@/containers/Layout'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div className={inter.className}>
			<Header>
				<Layout>
					<div className='h-screen w-screen  flex items-center'>
						<h1 className='text-6xl'>HELLOWORLD</h1>
						<h1 className='text-6xl'>HELLOWORLD</h1>
						<h1 className='text-6xl'>HELLOWORLD</h1>
					</div>
					<div className='h-screen w-screen border border-red-800'></div>
					<div className='h-screen w-screen border border-yellow-900'></div>
				</Layout>
			</Header>
		</div>
	)
}
