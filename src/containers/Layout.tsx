import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	return <div className='relative'>{children}</div>
}

export default Layout
