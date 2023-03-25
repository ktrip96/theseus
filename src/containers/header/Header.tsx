import React, { ReactNode, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import { getUsertypeFromURL } from '@/utils/routing'

type HeaderProps = {
	children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const userType = getUsertypeFromURL(router.asPath)

	const open = () => setIsOpen(true)

	return (
		<>
			<header
				className={`w-screen h-[80px] flex items-center px-12 xl:px-28 2xl:px-52 justify-between gap-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg  drop-shadow-lg ${
					!isOpen && 'border'
				} `}
			>
				<div className='flex items-center gap-20'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Theseus.</h1>
					{/* Desktop menu */}
					<ul className='lg:flex gap-8 hidden'>
						<Navbar userType={userType} closeMenu={() => setIsOpen(false)} />
					</ul>
				</div>
				<h1 className='text-lg text-black hidden lg:block truncate'>Παναγιώτης Τσανάκας</h1>

				{/* Mobile Menu */}

				{isOpen ? (
					<GrClose size={30} className='lg:hidden' onClick={() => setIsOpen(false)} />
				) : (
					<FiMenu size={30} className='lg:hidden' onClick={open} />
				)}
			</header>

			{/* Mobile Navbar  */}

			{isOpen && (
				<ul className='lg:hidden fixed top-[80px] left-0 right-0 w-screen px-5 pb-5 z-50 backdrop-blur-md border-b border-gray-300 drop-shadow-sm'>
					<Navbar userType={userType} closeMenu={() => setIsOpen(false)} />
				</ul>
			)}
			{children}
		</>
	)
}

export default Header
