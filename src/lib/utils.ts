import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getDistinctFields(array: any[], distinctField: string) {
	const distinctFieldSet = new Set<string>()
	array.forEach((i) => i.hasOwnProperty(distinctField) !== undefined && distinctFieldSet.add(i[distinctField]))
	return distinctFieldSet
}
