import { Avatar, Box, Breadcrumbs, Link, List, ListItem } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import avatar from '../../assets/ph-avatar.png'
import { useState } from 'react'

function Header() {
	const [breadcrumbs, setBreadcrubms] = useState(['Dashboard', 'HR manager', 'Employees', 'John Smith Profile'])
	return (
		<Box className="flex h-[7.125rem] items-center justify-between px-10 py-6">
			<Box>
				<h1 className="leading[2.4375rem] font-sans text-[1.625rem] font-bold text-fg">John Smith Profile</h1>
				<Breadcrumbs separator={<NavigateNextIcon className="text-blue text-blue-1" />} aria-label="breadcrumb">
					{breadcrumbs.map((item, index) => (
						<Link
							href="#"
							key={item}
							className={`font-sans text-xs leading-[1.125rem] text-fg1 no-underline hover:underline ${index === breadcrumbs.length - 1 && '!text-blue-3'}`}
						>
							{item}
						</Link>
					))}
				</Breadcrumbs>
			</Box>
			<Box className="flex items-center gap-8">
				<List className="flex items-center gap-4">
					<ListItem className="relative grid h-12 w-12 min-w-0 place-content-center rounded-full text-green hover:bg-primary/60 hover:text-white">
						<NotificationsNoneIcon className="h-7 w-7" />
						<span className="absolute right-[25%] top-[20%] flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600"></span>
					</ListItem>
					<ListItem className="grid h-12 w-12 min-w-0 place-content-center rounded-full text-green hover:bg-primary/60 hover:text-white">
						<MailOutlineIcon className="h-7 w-7" />
					</ListItem>

					<ListItem className="grid h-12 w-12 min-w-0 place-content-center rounded-full text-green hover:bg-primary/60 hover:text-white">
						<SettingsOutlinedIcon className="h-7 w-7" />
					</ListItem>
				</List>
				<Avatar src={avatar} className="rounded-2xl bg-primary"></Avatar>
			</Box>
		</Box>
	)
}

export default Header
