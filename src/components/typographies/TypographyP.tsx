export function TypographyP({ children }: { children: React.ReactNode }) {
	return <p className='leading-7 [&:not(:first-child)]:mt-6 text-gray-700'>{children}</p>
}
