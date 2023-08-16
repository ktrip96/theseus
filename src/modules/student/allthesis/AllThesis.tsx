import { AllThesisStudentColumns } from './components/Columns'
import { StudentThesisTable } from './components/StudentThesisTable'
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
import { formatDate, getDistinctFields } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { getAllAvailableTheses } from '@/pages/api/requests/thesis'
import { ThesisTableType } from '@/types/thesis'

const allTeachers = 'Όλοι οι καθηγητές'
const allFlows = 'Όλες οι ροές'

const AllThesis = () => {
	const { data } = useQuery(['allTheses'], () => getAllAvailableTheses())

	const transformedData: ThesisTableType[] = data!.result!.map((thesis) => {
		return {
			//@ts-ignore
			id: thesis._id,
			title: thesis.title,
			flow: thesis.flow,
			teacherName: thesis.creator.name,
			date: formatDate(thesis.creationDate),
		}
	})

	const teacherFilterArray = useMemo(
		() => [allTeachers, ...Array.from(getDistinctFields(transformedData, 'teacherName'))],
		[transformedData]
	)
	const flowFilterArray = useMemo(
		() => [allFlows, ...Array.from(getDistinctFields(transformedData, 'flow'))],
		[transformedData]
	)
	const [selectedTeacher, setSelectedTeacher] = useState<string>(allTeachers)
	const [selectedFlow, setSelectedFlow] = useState<string>(allFlows)

	const filteredThesis = transformedData.filter(
		(thesis) =>
			(selectedTeacher === allTeachers || thesis.teacherName === selectedTeacher) &&
			(thesis.flow === selectedFlow || selectedFlow === allFlows)
	)

	return (
		<>
			{/* Φίλτρα */}
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

			<StudentThesisTable columns={AllThesisStudentColumns} data={filteredThesis} />
		</>
	)
}

export default AllThesis
