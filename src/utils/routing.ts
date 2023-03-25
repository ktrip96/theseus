import { UserType } from '@/types/user'

export const getUsertypeFromURL = (path: string): UserType | '' => {
	const secondSlashIndex = path.indexOf('/', 1)
	//@ts-ignore
	if (secondSlashIndex === -1) return path.substring(1, path.length)
	//@ts-ignore
	else return path.substring(1, secondSlashIndex)
}
