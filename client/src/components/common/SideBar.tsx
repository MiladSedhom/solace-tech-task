import { Box, List, ListItem, ListItemIcon } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView'
import logo from '../../assets/logo.svg'
import BoxIcon from '../icons/Box'
import Research from '../icons/Research'
import Report from '../icons/Report'
import Teams from '../icons/Teams'

function SideBar() {
	return (
		<Box className="flex h-screen w-[6.75rem] flex-col items-center gap-10 border-r border-border bg-bg1 p-8">
			<img src={logo} alt="logo" width={48} height={48} />
			<List className="flex flex-col items-center gap-6 p-0">
				<ListItem className="p-0">
					<ListItemIcon className="grid h-12 w-12 min-w-0 place-content-center rounded-2xl bg-primary text-white">
						<GridViewIcon className="h-7 w-7" />
					</ListItemIcon>
				</ListItem>
				<ListItem className="p-0">
					<ListItemIcon className="grid h-12 w-12 min-w-0 place-content-center rounded-2xl text-fg1 hover:bg-primary/80 hover:text-white">
						<Research className="hover:stroke-white" />
						{/* can't find the icon in mui */}
					</ListItemIcon>
				</ListItem>

				<ListItem className="p-0">
					<ListItemIcon className="grid h-12 w-12 min-w-0 place-content-center rounded-2xl text-fg1 hover:bg-primary/80 hover:text-white">
						<Report className="hover:stroke-white" />
					</ListItemIcon>
				</ListItem>
				<ListItem className="p-0">
					<ListItemIcon className="grid h-12 w-12 min-w-0 place-content-center rounded-2xl text-fg1 hover:bg-primary/80 hover:text-white">
						<Teams className="hover:stroke-white" />
					</ListItemIcon>
				</ListItem>
				<ListItem className="p-0">
					<ListItemIcon className="grid h-12 w-12 min-w-0 place-content-center rounded-2xl text-fg1 hover:bg-primary/80 hover:text-white">
						{/* <img src={box} alt="box" /> */}
						<BoxIcon className="hover:stroke-white" />
					</ListItemIcon>
				</ListItem>
			</List>
		</Box>
	)
}

export default SideBar
