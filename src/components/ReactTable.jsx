import React, { useMemo } from 'react'
import { mockThesisTableArray } from '@/mock/mockThesisTable'
import { useTable } from 'react-table'

const ReactTable = () => {
	const data = useMemo(() => mockThesisTableArray, [])
	const columns = useMemo(
		() => [
			{
				Header: 'Title',
				accessor: 'title', // accessor is the "key" in the data
			},
			{
				Header: 'Status',
				accessor: 'status',
			},
		],
		[]
	)
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
	return (
		<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
			<thead>
				{headerGroups.map((headerGroup, index) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={index}>
						{headerGroup.headers.map((column, index) => (
							<th
								key={index}
								{...column.getHeaderProps()}
								style={{
									borderBottom: 'solid 3px red',
									background: 'aliceblue',
									color: 'black',
									fontWeight: 'bold',
								}}
							>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, index) => {
					prepareRow(row)
					return (
						<tr {...row.getRowProps()} key={index}>
							{row.cells.map((cell, index) => {
								return (
									<td
										key={index}
										{...cell.getCellProps()}
										style={{
											padding: '10px',
											border: 'solid 1px gray',
											background: 'papayawhip',
										}}
									>
										{cell.render('Cell')}
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default ReactTable
