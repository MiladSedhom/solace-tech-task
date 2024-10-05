import DashboardCard from '../../DashboardCard'

function ContactInfoSection() {
	const contactInfo = [
		[
			{ label: 'Personal Email', value: 'John.smith@gmail.com ' },
			{ label: 'Mobile', value: '011223344556' },
		],
	]

	return <DashboardCard title="Contant Information" data={contactInfo} loading={false} error={false} />
}

export default ContactInfoSection
