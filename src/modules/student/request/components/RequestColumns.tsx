import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ArrowUpDown } from 'lucide-react'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '../../../../components/ui/button'
import { StudentRequestType } from '@/types'
import { deleteRequest } from '@/pages/api/requests/request'

const handleDelete = async (requestId: string) => {
	//	TODO: Invalidate query with useQueryClient
	//	TODO: Toast Handling
	try {
		await deleteRequest(requestId)
		alert('Success')
	} catch (e) {
		alert('Error')
	}
}

export const StudentRequestColumns: ColumnDef<StudentRequestType>[] = [
	{
		accessorKey: 'thesisTitle',
		header: () => {
			return (
				<Button variant='ghost'>
					Tίτλος
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			)
		},
		cell: ({ row }) => (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger className='max-w-[400px]'>
						<h1 className='truncate'>{row.getValue('thesisTitle')}</h1>
					</TooltipTrigger>
					<TooltipContent>{row.getValue('thesisTitle')}</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		),
	},
	{
		accessorKey: 'date',
		header: 'Ημερομηνία',
	},
	{
		accessorKey: 'teacherName',
		header: 'Καθηγητής',
	},

	{
		accessorKey: 'status',
		header: '',
		cell: ({ row }) => {
			console.log('Row: ', row.original)
			return (
				<Button
					onClick={(e) => {
						e.stopPropagation()
						handleDelete(row.original.id)
					}}
				>
					Ακύρωση
				</Button>
			)
		},
	},
]
