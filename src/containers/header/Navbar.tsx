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
					<Link href='/student/thesis'>
						<li
							className='cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Όλες οι διπλωματικές
						</li>
					</Link>

					<Link href='/student/request'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Οι αιτήσεις μου
						</li>
					</Link>
					<Link href='/student/info'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Γενικές πληροφορίες
						</li>
					</Link>
				</>
			)
		case 'teacher':
			return (
				<>
					<Link href='/teacher/new'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Νέα διπλωματική
						</li>
					</Link>
					<Link href='/teacher/mythesis'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Οι διπλωματικές μου
						</li>
					</Link>
					<Link href='/teacher/allthesis'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Όλες οι διπλωματικές
						</li>
					</Link>
					<Link href='/teacher/myrequests'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Αιτήματα
						</li>
					</Link>
				</>
			)
		case 'sudoteacher':
			return (
				<>
					<Link href='/sudoteacher/new'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Νέα διπλωματική
						</li>
					</Link>
					<Link href='/sudoteacher/mythesis'>
						<li
							className='truncate cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Οι διπλωματικές μου
						</li>
					</Link>
					<Link href='/sudoteacher/thesis'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Όλες οι διπλωματικές
						</li>
					</Link>
					<Link href='/sudoteacher/request'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Αιτήματα
						</li>
					</Link>
					<Link href='/sudoteacher/request'>
						<li
							className=' cursor-pointer text-center text-gray-600 hover:text-black transition duration-200'
							onClick={closeMenu}
						>
							Εγκρίσεις
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
			return null
	}
}

export default Navbar
