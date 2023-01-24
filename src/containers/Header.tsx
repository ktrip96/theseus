import React, { ReactNode, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

type Props = {
	children: ReactNode
}

const Header: React.FC<Props> = ({ children }: Props) => {
	const [isOpen, setIsOpen] = useState(false)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)

	return (
		<>
			<header className='w-screen border h-[80px] flex items-center px-12 justify-between gap-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-md  drop-shadow-lg '>
				<div className='flex items-center gap-20'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Theseus.</h1>
					{/* Desktop menu */}
					<ul className='md:flex gap-8 hidden'>
						<li className='w-36   cursor-pointer text-gray-600 hover:text-black hover:font-semibold transition duration-200'>
							Διπλωματικές
						</li>
						<li className='w-36    cursor-pointer text-gray-600 hover:text-black hover:font-semibold transition duration-200'>
							Κάτι διαφορετικό
						</li>
						<li className='w-36    cursor-pointer text-gray-600 hover:text-black hover:font-semibold transition duration-200'>
							Random
						</li>
					</ul>
				</div>
				{/* Mobile Menu */}
				<h1 className='text-lg text-black hidden md:block truncate'>Παναγιώτης Τσανάκας</h1>
				{isOpen ? (
					<GrClose size={30} className='md:hidden' onClick={close} />
				) : (
					<FiMenu size={30} className='md:hidden' onClick={open} />
				)}
			</header>

			{isOpen && (
				<ul className='md:hidden fixed top-[80px] left-0 right-0 w-screen p-5 z-50 backdrop-blur-md border-b border-gray-300'>
					<li className=' text-gray-600 my-4 ' onClick={close}>
						Διπλωματικές
					</li>
					<li className=' text-gray-600 my-4 ' onClick={close}>
						Κάτι διαφορετικό
					</li>
					<li className=' text-gray-600 my-4 ' onClick={close}>
						Random
					</li>
					<li className=' text-gray-600 my-4 ' onClick={close}>
						Sign out
					</li>
				</ul>
			)}
			{children}
		</>
	)
}

export default Header
