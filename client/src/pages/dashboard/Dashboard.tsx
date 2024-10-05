import { Box } from '@mui/material'
import SideBar from '../../components/common/SideBar'
import Header from '../../components/common/Header'
import DashboardNav from '../../components/dashboard/DashboardNav'
import { useState } from 'react'
import { DashboardView } from '../../types/dashboard.types'
import { DASHBOARD_VIEW_OPTIONS } from '../../constants/dashboard.constants'
import PersonalInfoView from '../../components/dashboard/PersonalInfoView/PersonalInfoView'
import FinancialInfoView from '../../components/dashboard/FinancialInfoView'

function Dashboard() {
	const [currView, setCurrView] = useState<DashboardView>(DASHBOARD_VIEW_OPTIONS[0].id)

	return (
		<Box className="flex bg-bg">
			{/* layout can be extracted if needed */}
			<SideBar />
			<Box className="w-full">
				<Header />
				<Box className="flex items-start gap-6 p-6">
					<DashboardNav currView={currView} onViewChange={setCurrView} />
					{currView === 'personal' ? <PersonalInfoView /> : <FinancialInfoView />}
				</Box>
			</Box>
		</Box>
	)
}

export default Dashboard
