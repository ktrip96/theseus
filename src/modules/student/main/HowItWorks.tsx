// import Button from '@/components/Button'
import { Button } from '@/components/ui/button'
import { TypographyH3 } from '@/components/typographies/TypographyH3'
import React from 'react'
import Link from 'next/link'

const HowItWorks = () => {
	return (
		<section className='border-b border-gray-200 pb-8'>
			<div className='text-center my-6'>
				<TypographyH3>Πώς λειτουργεί και τι σου προσφέρει;</TypographyH3>
			</div>
			<div className='text-gray-500 text-center m-auto pb-8'>
				<ul className='my-6 list-disc [&>li]:mt-2 text-left w-3/5 m-auto'>
					<li>Έχεις εικόνα για όλες τις διπλωματικές που είναι διαθέσιμες στους φοιτητές</li>

					<li>Βλέπεις αναλυτικές λεπτομέρειες για κάθε διπλωματική</li>

					<li>Κάνεις εύκολα και γρήγορα αίτηση ανάθεσης στον καθηγητή για τη διπλωματική που σε ενδιαφέρει</li>
					<li>Υποβάλλεις άμεσα την διπλωματική σου προς βαθμολόγηση</li>
				</ul>
			</div>
			<div className='flex items-center justify-center gap-4'>
				<Button variant='ghost' asChild>
					<Link href='/info'>Γενικές πληροφορίες</Link>
				</Button>
				<Button variant='default' asChild>
					<Link href='student/thesis'>Δες τις διπλωματικές</Link>
				</Button>
			</div>
		</section>
	)
}

export default HowItWorks
