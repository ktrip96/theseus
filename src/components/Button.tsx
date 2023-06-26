import { ButtonHTMLAttributes } from 'react'

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'destructive'

type ButtonProps = {
	variant?: ButtonType
	children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ variant, children, ...props }: ButtonProps) => {
	if (variant === undefined) variant = 'primary'
	return (
		<button
			className={`px-6 py-3 text-base h-12 rounded-md flex gap-2 items-center justify-center cursor-pointer outline-none disabled:cursor-not-allowed ${getVariantStyling(
				variant
			)} transition`}
			{...props}
		>
			{children}
		</button>
	)
}
function getVariantStyling(variant: ButtonType): string {
	switch (variant) {
		case 'primary':
			return 'text-white border-2 border-green-700 bg-green-700 hover:bg-green-600 hover:border-green-600 focus:border-green-600 disabled:bg-green-300 disabled:border-green-300'
		case 'destructive':
			return 'text-white border-2 border-red-600 bg-red-600  hover:bg-red-500 hover:border-red-500 focus:border-red-500 disabled:bg-red-300 disabled:border-red-300'
		default:
			return 'text-white border-2 border-green-700 bg-green-700 hover:bg-green-600 hover:border-green-600 focus:border-green-600 disabled:bg-green-300 disabled:border-green-300'
	}
}

export default Button
