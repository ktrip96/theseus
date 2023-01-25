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
			<header
				className={`w-screen ${
					!isOpen && 'border'
				} h-[80px] flex items-center px-12 xl:px-28 2xl:px-52 justify-between gap-3 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg  drop-shadow-lg`}
			>
				<div className='flex items-center gap-20'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Theseus.</h1>
					{/* Desktop menu */}
					<ul className='lg:flex gap-8 hidden'>
						<li className='cursor-pointer text-gray-600 hover:text-black transition duration-200'>
							Διπλωματικές
						</li>
						<li className=' cursor-pointer text-gray-600 hover:text-black transition duration-200'>
							Οι αιτήσεις μου
						</li>
						<li className=' cursor-pointer text-gray-600 hover:text-black transition duration-200'>
							Πληροφορίες
						</li>
					</ul>
				</div>
				{/* Mobile Menu */}
				<h1 className='text-lg text-black hidden lg:block truncate'>Παναγιώτης Τσανάκας</h1>
				{isOpen ? (
					<GrClose size={30} className='lg:hidden' onClick={close} />
				) : (
					<FiMenu size={30} className='lg:hidden' onClick={open} />
				)}
			</header>

			{isOpen && (
				<ul className='lg:hidden fixed top-[80px] left-0 right-0 w-screen px-5 z-50 backdrop-blur-md border-b border-gray-300 drop-shadow-sm'>
					<li className=' text-gray-600 my-4 text-center' onClick={close}>
						Διπλωματικές
					</li>
					<li className=' text-gray-600 my-4 text-center ' onClick={close}>
						Οι αιτήσεις μου
					</li>
					<li className=' text-gray-600 my-4  text-center' onClick={close}>
						Πληροφορίες
					</li>
					<li className=' text-gray-600 my-4  text-center' onClick={close}>
						Sign out
					</li>
				</ul>
			)}
			{children}
		</>
	)
}

export default Header
