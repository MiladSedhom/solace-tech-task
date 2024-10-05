import { useQuery } from '@apollo/client'
import { User } from '../../../../types/user.types'
import { GET_USER } from '../../../../api/user/queries'
import DashboardCard from '../../DashboardCard'
import BasicInfoForm from '../forms/BasicInfoForm'
import { useState } from 'react'
import dayjs from 'dayjs'

function BasicInfoSection() {
	const [isForm, setIsForm] = useState(false)

	const { loading, error, data } = useQuery<{ user: User }>(GET_USER, { variables: { id: '1' } })

	const extraNationalities = data?.user?.nationalities
		.slice(1)
		?.map(n => n.country.name)
		.join(',')

	const basicInfo = [
		[
			{ label: 'National ID Number', value: data?.user?.nationalId?.idNumber },
			{ label: 'National ID Expiring Date', value: data?.user?.nationalId?.expiryDate },
			{ label: 'Title', value: 'Mr.' },
		],
		[
			{ label: 'First Name', value: data?.user?.firstName },
			{ label: 'Father Name', value: data?.user?.fatherName },
			{ label: 'Grand Father Name', value: data?.user?.grandfatherName },
			{ label: 'Family Name', value: data?.user?.familyName },
		],
		[
			{ label: 'الأسم الأول', value: data?.user?.localizedName?.firstName },
			{ label: 'اسم الأب', value: data?.user?.localizedName?.fatherName },
			{ label: 'اسم الجد', value: data?.user?.localizedName?.grandfatherName },
			{ label: 'اللقب / اسم العائلة', value: data?.user?.localizedName?.familyName },
		],
		[
			{ label: 'Date of birth', value: '01 / 04 / 1980' },
			{ label: 'Gender', value: 'Male' },
			{ label: 'Nationality', value: data?.user?.nationalities?.[0]?.country.name },
			{ label: 'Additional Nationality', value: extraNationalities },
		],
		[
			{ label: 'Passport No.', value: 'A135464' },
			{ label: 'Passport Issue Date', value: '01 / 04 / 1980' },
			{ label: 'Passport Expiry Date', value: '01 / 04 / 1980' },
		],
		[
			{ label: 'Marital Status', value: data?.user?.maritalStatus.name },
			{ label: 'Dependencies', value: data?.user?.dependants.toString() },
		],
	]

	return (
		<>
			{isForm ? (
				<BasicInfoForm initialData={flattenUserData(data?.user!)} onSubmit={data => console.log(data)} />
			) : (
				<DashboardCard
					title="Basic Information"
					data={basicInfo}
					loading={loading}
					error={!!error}
					onEdit={() => {
						setIsForm(true)
					}}
				/>
			)}
		</>
	)
}

export default BasicInfoSection

function flattenUserData(user: User) {
	return {
		firstName: user.firstName,
		fatherName: user.fatherName,
		grandfatherName: user.grandfatherName,
		familyName: user.familyName,
		localizedFirstName: user.localizedName.firstName,
		localizedFatherName: user.localizedName.fatherName,
		localizedGrandfatherName: user.localizedName.grandfatherName,
		localizedFamilyName: user.localizedName.familyName,
		nationalIdNumber: user.nationalId.idNumber,
		nationalIdExpiryDate: dayjs(user.nationalId.expiryDate).format('YYYY-MM-DD'),
	}
}
