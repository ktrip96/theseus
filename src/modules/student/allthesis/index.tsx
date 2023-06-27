import { columns } from '@/components/Columns'
import { StudentThesisTable } from '@/components/StudentThesisTable'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import { mockThesisTableArray } from '@/mock/mockThesisTable'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectGroup,
	SelectValue,
	SelectLabel,
} from '@/components/ui/select'

import React, { useMemo, useState } from 'react'
import { getDistinctFields } from '@/lib/utils'

const allTeachers = 'Όλοι οι καθηγητές'
const allFlows = 'Όλες οι ροές'

const AllThesis = () => {
	//	TODO: React Query call to get the data
	const teacherFilterArray = useMemo(
		() => [allTeachers, ...Array.from(getDistinctFields(mockThesisTableArray, 'teacherName'))],
		[]
	)
	const flowFilterArray = useMemo(
		() => [allFlows, ...Array.from(getDistinctFields(mockThesisTableArray, 'flow'))],
		[]
	)
	const [selectedTeacher, setSelectedTeacher] = useState<string>(allTeachers)
	const [selectedFlow, setSelectedFlow] = useState<string>(allFlows)

	const filteredThesis = mockThesisTableArray.filter(
		(thesis) =>
			(selectedTeacher === allTeachers || thesis.teacherName === selectedTeacher) &&
			(thesis.flow === selectedFlow || selectedFlow === allFlows)
	)

	return (
		<div className='container mx-auto'>
			<div className='mt-2 mb-4'>
				<TypographyH4>Όλες οι διπλωματικές</TypographyH4>
			</div>
			<div className='flex gap-4 mb-6'>
				<Select defaultValue={allTeachers} onValueChange={(e) => setSelectedTeacher(e)}>
					<SelectTrigger className='w-fit px-4'>
						<SelectValue placeholder='Επίλεξε καθηγητή' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Καθηγητές</SelectLabel>
							{teacherFilterArray.map((i, index) => (
								<SelectItem value={i} key={index}>
									{i}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Select defaultValue={allFlows} onValueChange={(e) => setSelectedFlow(e)}>
					<SelectTrigger className='w-fit px-4'>
						<SelectValue placeholder='Επίλεξε Ροή' />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectLabel>Ροές</SelectLabel>
							{flowFilterArray.map((i, index) => (
								<SelectItem value={i} key={index}>
									{i}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>

			<StudentThesisTable columns={columns} data={[...filteredThesis, ...filteredThesis]} />
		</div>
	)
}

export default AllThesis
