export function TypographyP({ children }: { children: React.ReactNode }) {
	return <h1 className='leading-7 [&:not(:first-child)]:mt-6'>{children}</h1>
}
