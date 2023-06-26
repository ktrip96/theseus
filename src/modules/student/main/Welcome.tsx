import { TypographyH1 } from '@/components/typographies/TypographyH1'
import { TypographyP } from '@/components/typographies/TypographyP'
import React from 'react'

function Welcome() {
	return (
		<section>
			<div className='text-center my-6'>
				<TypographyH1>Καλώς ήρθες</TypographyH1>
			</div>
			<div className='text-gray-500 text-center w-3/4 m-auto pb-8 border-b border-gray-200'>
				<TypographyP>
					Ο Θησέας είναι μια εφαρμογή διαχείρισης των αιτήσεων <br /> για τις διπλωματικές που αφορούν στο
					Πολυτεχνείο.
				</TypographyP>
			</div>
		</section>
	)
}

export default Welcome
