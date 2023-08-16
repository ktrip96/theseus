import Header from '@/containers/header/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from '@/containers/Layout'

const inter = Inter({ subsets: ['latin', 'greek'], display: 'swap' })

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * (60 * 1000),
		},
	},
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<div className={inter.className}>
				<Header>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Header>
			</div>
		</QueryClientProvider>
	)
}
