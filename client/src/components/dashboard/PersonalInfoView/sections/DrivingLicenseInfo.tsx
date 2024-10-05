import DashboardCard from '../../DashboardCard'

function DrivingLicenseSection() {
	const drivingLicense = [
		[
			{ label: 'Driving License', value: 'Yes' },
			{ label: 'Driving License Type', value: 'C1E' },
			{ label: 'Driving License expiry date', value: '01 / 04 / 2025' },
		],
	]

	return <DashboardCard title="Driving License Details" data={drivingLicense} loading={false} error={false} />
}

export default DrivingLicenseSection
