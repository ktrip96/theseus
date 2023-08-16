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

export function formatDate(inputDate: string): string {
	const date = new Date(inputDate)
	const day: number = date.getDate()
	const month: number = date.getMonth() + 1 // Months are zero-based
	const year: number = date.getFullYear()

	// Format with leading zeros if necessary
	const formattedDay: string = day < 10 ? `0${day}` : day.toString()
	const formattedMonth: string = month < 10 ? `0${month}` : month.toString()

	return `${formattedDay}-${formattedMonth}-${year}`
}
