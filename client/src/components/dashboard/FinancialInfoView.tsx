import { Box } from '@mui/material'
import DashboardCard from './DashboardCard'

function FinancialInfoView() {
	const bankInfo = [
		[
			{ label: 'Bank Name', value: 'CIB' },
			{ label: 'IBAN', value: '12346546413216446' },
		],
	]

	return (
		<Box className="flex h-[calc(100vh-11rem)] grow flex-col gap-6 overflow-auto">
			<DashboardCard title="Bank Information" data={bankInfo} />
		</Box>
	)
}

export default FinancialInfoView
