import ThesisInfo from '@/components/ThesisInfo'
import ThesisRule from '@/components/ThesisRule'
import { TypographyH4 } from '@/components/typographies/TypographyH4'
import { TypographyP } from '@/components/typographies/TypographyP'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import React from 'react'

const InfoPage = () => {
	return (
		<div className='container py-4'>
			<Image src='/theseus.png' alt='theseus' className='m-auto' width={160} height={160} />
			<TypographyH4>Διπλωματική Εργασία</TypographyH4>
			<TypographyP>
				Η Διπλωματική Εργασία (Δ.Ε.) είναι μία εκτεταμένη αναλυτική ή συνθετική εργασία που εκπονείται από τους
				τελειόφοιτους φοιτητές στο τέλος των σπουδών τους με σκοπό την ολοκλήρωση των γνώσεών τους και την
				παρουσίαση των ικανοτήτων τους στην επεξεργασία αυτοτελών θεμάτων της Επιστήμης του Ηλεκτρολόγου
				Μηχανικού και Μηχανικού Υπολογιστών. Επισημαίνεται η σημασία της διπλωματικής εργασίας τόσο ως
				κορύφωσης της πολύχρονης προσπάθειας κάθε σπουδαστή όσο και ως τελευταίου σταδίου για τη δημιουργία
				ενός Μηχανικού και επιστήμονα και την ενσωμάτωσή του στο χώρο της εργασίας και της κοινωνίας
				γενικότερα.
			</TypographyP>

			<Tabs defaultValue='rule'>
				<TabsList className='grid w-full grid-cols-2 mt-4'>
					<TabsTrigger value='rule'>Κανονισμός</TabsTrigger>
					<TabsTrigger value='perigramma'>Περίγραμμα</TabsTrigger>
				</TabsList>
				<TabsContent value='rule'>
					<ThesisRule />
				</TabsContent>
				<TabsContent value='perigramma'>
					<ThesisInfo />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default InfoPage
