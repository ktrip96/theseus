/* eslint-disable react/no-unescaped-entities */
import React from 'react'

type Props = {}

const index = (props: Props) => {
	return (
		<div className='w-full md:w-3/4 m-auto my-4'>
			<h1 className='text-3xl font-bold text-center my-6'>Καλώς ήρθες</h1>
			<p className='text-xs text-gray-500 text-center w-3/4 m-auto pb-8 border-b border-gray-200'>
				Ο Θησέας είναι μια εφαρμογή διαχείρισης των αιτήσεων <br /> για τις διπλωματικές που αφορούν στο
				Πολυτεχνείο.
			</p>

			{/* Περιγραφή του κάθε section */}
		</div>
	)
}

export default index
