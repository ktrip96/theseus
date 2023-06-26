import Header from '@/containers/header/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import Layout from '@/containers/Layout'

const inter = Inter({ subsets: ['latin', 'greek'], display: 'swap' })

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
