import Header from '@/containers/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Layout from '@/containers/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={inter.className}>
			<Header>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Header>
		</div>
	)
}
