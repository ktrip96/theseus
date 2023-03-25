import { UserType } from '@/types/user'
import Link from 'next/link'

type MenuListProps = {
	userType: UserType | ''
	closeMenu: () => void
}

const Navbar: React.FC<MenuListProps> = ({ userType, closeMenu }) => {
	switch (userType) {
		case 'student':
			return (
				<>
					<li
						className='cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
						onClick={closeMenu}
					>
						Μαθητής
					</li>

					<Link href='/info'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Πληροφορίες
						</li>
					</Link>
				</>
			)
		case 'teacher':
			return (
				<>
					<li
						className='cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
						onClick={closeMenu}
					>
						Καθηγητής
					</li>

					<Link href='/info'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Πληροφορίες
						</li>
					</Link>
				</>
			)
		case 'secretary':
			return (
				<>
					<li
						className='cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
						onClick={closeMenu}
					>
						Γραμματεία
					</li>

					<Link href='/info'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Πληροφορίες
						</li>
					</Link>
				</>
			)
		case '':
			return <span></span>
		default:
			return <span>Default</span>
	}
}

export default Navbar
