import { Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import avatar from '../../assets/ph-avatar.png'
import { DashboardView } from '../../types/dashboard.types'
import { DASHBOARD_VIEW_OPTIONS } from '../../constants/dashboard.constants'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'

type Props = {
	currView: DashboardView
	onViewChange: (arg0: DashboardView) => void
}

function DashboardNav(props: Props) {
	return (
		<Box className="min-w-[20rem] rounded-3xl bg-white p-6">
			<div className="p-4">
				<Box className="relative inline-block">
					<Avatar src={avatar} className="mb-4 h-[7.5rem] w-[7.5rem] rounded-[2.5rem]" />
					<CameraAltOutlinedIcon className="absolute bottom-[5%] right-[5%] h-10 w-10 rounded-full bg-[#F0F0F0] p-2 text-[#2D2F30]"></CameraAltOutlinedIcon>
				</Box>
				<h1 className="mb-1 text-xl font-semibold text-fg">John Smith</h1>
				<h2 className="text-base text-fg1">Senior Product Manager</h2>
			</div>
			<Divider />
			<List>
				{DASHBOARD_VIEW_OPTIONS.map(o => (
					<ListItem className="p-0" key={o.id}>
						<ListItemButton>
							<ListItemText
								className="text-[1.125rem] font-medium text-fg data-[selected=true]:text-blue-2"
								data-selected={props.currView === o.id}
								onClick={() => props.onViewChange(o.id)}
							>
								{o.label}
							</ListItemText>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}

export default DashboardNav
