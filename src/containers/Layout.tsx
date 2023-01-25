import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	return (
		<div className='max-w-[1000px] border border-red-600 rounded-md m-auto p-5 mt-[80px]  flex items-center overflow-hidden'>
			{children}
		</div>
	)
}

export default Layout
