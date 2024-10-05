import { Button } from '@mui/material'
import DashboardCard from '../../DashboardCard'
import AttachFileIcon from '@mui/icons-material/AttachFile'

function MilitaryStatusSection() {
	const militaryStatus = [
		[
			{ label: 'Require Travel Permit', value: 'Yes' },
			{ label: 'Military Status', value: 'Exempted ' },
			{
				label: 'Document',
				value: '',
				node: (
					<Button className="h-8 w-[8rem] rounded bg-[#ECECEC] p-2 text-sm font-light normal-case text-fg">
						<AttachFileIcon className="mr-2 rotate-45 text-lg" />
						Upload file
					</Button>
				),
			},
		],
	]

	return <DashboardCard title="Military Status" data={militaryStatus} loading={false} error={false} />
}

export default MilitaryStatusSection
