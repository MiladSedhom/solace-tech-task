import DashboardCard from '../../DashboardCard'

function EmergencyContactsSection() {
	const emergencyContacts = [
		[
			{ label: 'Emergency Contact Person Name', value: 'John John' },
			{ label: 'Emergency Relation', value: 'Father' },
			{ label: 'Emergency Phone', value: '011223344556' },
		],
	]

	return <DashboardCard title="Emergency Contacts" data={emergencyContacts} loading={false} error={false} />
}

export default EmergencyContactsSection
