import React, { ReactNode, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import { getUsertypeFromURL } from '@/utils/routing'
import Link from 'next/link'

type HeaderProps = {
	children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()
	const userType = getUsertypeFromURL(router.asPath)

	return (
		<>
			<header
				className={`w-screen h-[80px] flex items-center px-12 xl:px-28 2xl:px-52  gap-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg  drop-shadow-lg ${
					!isOpen && 'border'
				} `}
			>
				<div className='flex items-center gap-20'>
					<Link href='/'>
						<h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Theseus.</h4>
					</Link>
					{/* Desktop menu */}
					<ul className='lg:flex gap-8 hidden list-none'>
						<Navbar userType={userType} closeMenu={() => setIsOpen(false)} />
					</ul>
				</div>
				<h4 className='ml-auto text-lg text-black hidden lg:block truncate'>Παναγιώτης Τσανάκας</h4>

				{/* Mobile Menu */}

				{isOpen ? (
					<GrClose size={30} className='ml-auto lg:hidden' onClick={() => setIsOpen(false)} />
				) : (
					<FiMenu size={30} className='ml-auto lg:hidden' onClick={() => setIsOpen(true)} />
				)}
			</header>

			{/* Mobile Navbar  */}

			{isOpen && (
				<ul className='lg:hidden fixed top-[80px] left-0 right-0 w-screen px-5 pb-5 z-50 backdrop-blur-md border-b border-gray-300 drop-shadow-sm list-none'>
					<Navbar userType={userType} closeMenu={() => setIsOpen(false)} />
				</ul>
			)}
			{children}
		</>
	)
}

export default Header
