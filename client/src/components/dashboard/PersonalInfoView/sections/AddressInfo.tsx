import DashboardCard from '../../DashboardCard'

function AddressSection() {
	const address = [
		[
			{ label: 'Country', value: 'Egypt' },
			{ label: 'City', value: 'City' },
			{ label: 'Postal Code Phone', value: '11728' },
		],
	]

	return <DashboardCard title="Address Details" data={address} loading={false} error={false} />
}

export default AddressSection
