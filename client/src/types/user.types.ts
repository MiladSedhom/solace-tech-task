export interface User {
	id: number
	firstName: string
	fatherName: string
	grandfatherName: string
	familyName: string
	localizedName: LocalizedName
	nationalId: NationalId
	nationalities: Nationality[]
	maritalStatus: MaritalStatus
	dependants: number
}

interface Country {
	id: number
	name: string
}

interface Nationality {
	country: Country
	countryId: number
}

interface MaritalStatus {
	id: number
	name: string
}

interface LocalizedName {
	firstName: string
	fatherName: string
	grandfatherName: string
	familyName: string
}

interface NationalId {
	idNumber: string
	expiryDate: string
}
