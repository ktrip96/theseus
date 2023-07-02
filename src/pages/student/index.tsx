/* eslint-disable react/no-unescaped-entities */
import HowItWorks from '@/modules/student/main/HowItWorks'
import Welcome from '@/modules/student/main/Welcome'
import React from 'react'

const MainStudent = () => {
	//	TODO: Add Αίτηση button πάνω στο table
	return (
		<div className='w-full md:w-3/4 m-auto my-4'>
			<Welcome />
			<HowItWorks />
			{/* Προσφατες διπλωματικές εδώ , όπως εδώ https://vercel.com/docs*/}
		</div>
	)
}

export default MainStudent
