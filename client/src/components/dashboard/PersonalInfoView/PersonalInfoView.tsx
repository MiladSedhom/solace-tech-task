import BasicInfoSection from './sections/BasicInfo'
import ContactInfoSection from './sections/ContactInfo'
import EmergencyContactsSection from './sections/EmergencyContacts'
import AddressSection from './sections/AddressInfo'
import DrivingLicenseSection from './sections/DrivingLicenseInfo'
import MilitaryStatusSection from './sections/MilitaryStatusInfo'

function PersonalInfoView() {
	return (
		<div className="flex h-[calc(100vh-11rem)] grow flex-col gap-6 overflow-auto">
			<BasicInfoSection />
			<ContactInfoSection />
			<EmergencyContactsSection />
			<AddressSection />
			<DrivingLicenseSection />
			<MilitaryStatusSection />
		</div>
	)
}

export default PersonalInfoView
