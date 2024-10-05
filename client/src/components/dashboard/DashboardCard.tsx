import { Box, Button, Skeleton } from '@mui/material'
import { ReactNode } from 'react'

type DataItem = {
	label: string
	value?: string
	node?: ReactNode
}

type Props = {
	title: string
	//data is a list of lists, each child list takes a row
	data: DataItem[][]
	loading: boolean
	error: boolean
	onEdit?: Function
}

function DashboardCard(props: Props) {
	return (
		<Box className="rounded-[1.25rem] bg-white p-10">
			<Box className="mb-6 flex items-center justify-between">
				<h1 className="text-xl font-medium text-fg">{props.title}</h1>
				<Button
					className="transform-none bg-blue-2 px-10 py-2 text-sm font-semibold normal-case text-white"
					onClick={e => props.onEdit?.(e)}
				>
					Edit
				</Button>
			</Box>
			{props.loading ? (
				<LoadingSkeleton />
			) : props.error ? (
				<ErrorMessage />
			) : (
				<>
					<Box className="flex flex-col gap-6">
						{props.data.map((rowItems, index) => (
							<DataRow key={index} items={rowItems} />
						))}
					</Box>
				</>
			)}
		</Box>
	)
}

export default DashboardCard

const DataRow = ({ items }: { items: DataItem[] }) => (
	<div className="flex gap-6">
		{items.map(item => (
			<DataCell key={item.label} {...item} />
		))}
	</div>
)

const DataCell = ({ label, value, node }: DataItem) => (
	<div className="min-w-[20%]">
		<p className="text-xs font-light text-fg1">{label}</p>
		{node ?? <p className="font-medium text-fg">{value}</p>}
	</div>
)

const LoadingSkeleton = () => (
	<>
		<Skeleton className="h-8 w-1/5" />
		<Skeleton className="h-8 w-2/5" />
		<Skeleton className="h-20" />
	</>
)

const ErrorMessage = () => (
	<h1 className="text-2xl text-red-500">Something went wrong. make sure the server is running</h1>
)
