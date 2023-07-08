export function TypographyP({ children }: { children: React.ReactNode }) {
	return <h1 className='leading-7 [&:not(:first-child)]:mt-6 text-gray-700'>{children}</h1>
}
