import { Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const userFormSchema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	fatherName: z.string().min(1, 'Father name is required'),
	grandfatherName: z.string().min(1, 'Grandfather name is required'),
	familyName: z.string().min(1, 'Family name is required'),
	localizedFirstName: z.string().min(1, 'Arabic first name is required'),
	localizedFatherName: z.string().min(1, 'Arabic father name is required'),
	localizedGrandfatherName: z.string().min(1, 'Arabic grandfather name is required'),
	localizedFamilyName: z.string().min(1, 'Arabic family name is required'),
	nationalIdNumber: z.string().min(1, 'National ID is required'),
	nationalIdExpiryDate: z.string().min(1, 'Expiry date is required'),
})

type UserFormData = z.infer<typeof userFormSchema>
interface Props {
	initialData?: UserFormData
	onSubmit: (data: UserFormData) => void
}

function BasicInfoForm(props: Props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserFormData>({
		resolver: zodResolver(userFormSchema),
		defaultValues: props.initialData,
	})

	return (
		<form
			onSubmit={handleSubmit(props.onSubmit)}
			className="flex max-w-full flex-col gap-8 rounded-[1.25rem] bg-white p-10"
		>
			<Box className="flex flex-wrap gap-6">
				<TextField
					{...register('firstName')}
					className=""
					label="First Name"
					error={!!errors.firstName}
					helperText={errors.firstName?.message}
				/>

				<TextField
					{...register('fatherName')}
					className=""
					label="Father Name"
					error={!!errors.fatherName}
					helperText={errors.fatherName?.message}
				/>
				<TextField
					{...register('familyName')}
					className=""
					label="Family Name"
					error={!!errors.familyName}
					helperText={errors.familyName?.message}
				/>
				<TextField
					{...register('fatherName')}
					className=""
					label="Father Name"
					error={!!errors.fatherName}
					helperText={errors.fatherName?.message}
				/>
			</Box>

			<Box className="flex flex-wrap gap-6">
				<TextField
					label="Localized First Name"
					{...register('localizedFirstName')}
					className="shrink-0"
					error={!!errors.localizedFirstName}
					helperText={errors.localizedFirstName?.message}
				/>

				<TextField
					label="Localized Father Name"
					{...register('localizedFatherName')}
					className="shrink-0"
					error={!!errors.localizedFatherName}
					helperText={errors.localizedFatherName?.message}
				/>
				<TextField
					label="Localized Grandfather Name"
					{...register('localizedGrandfatherName')}
					className="shrink-0"
					error={!!errors.localizedGrandfatherName}
					helperText={errors.localizedGrandfatherName?.message}
				/>
				<TextField
					label="Localized Family Name"
					{...register('localizedFamilyName')}
					className="shrink-0"
					error={!!errors.localizedFamilyName}
					helperText={errors.localizedFamilyName?.message}
				/>
			</Box>

			<Box className="grid grid-cols-2 gap-6">
				<TextField
					label="National ID Number"
					{...register('nationalIdNumber')}
					error={!!errors.nationalIdNumber}
					helperText={errors.nationalIdNumber?.message}
				/>

				<TextField
					type="date"
					label="Expiry Date"
					{...register('nationalIdExpiryDate')}
					InputLabelProps={{ shrink: true }}
					error={!!errors.nationalIdExpiryDate}
					helperText={errors.nationalIdExpiryDate?.message}
				/>
			</Box>

			<Box className="mt-6 flex justify-end">
				<Button
					type="submit"
					className="transform-none bg-blue-2 px-10 py-2 text-sm font-semibold normal-case text-white"
				>
					Save Changes
				</Button>
			</Box>
		</form>
	)
}

export default BasicInfoForm
