import { gql } from '@apollo/client'

export const GET_USERS = gql`
	{
		users {
			firstName
			fatherName
			grandfatherName
			familyName
			localizedName {
				firstName
				fatherName
				grandfatherName
				familyName
			}
			nationalId {
				idNumber
				expiryDate
			}
			nationalities {
				country {
					id
					name
				}
				countryId
			}
			maritalStatus {
				id
				name
			}
			dependants
		}
	}
`

export const GET_USER = gql`
	query User($id: ID!) {
		user(id: $id) {
			firstName
			fatherName
			grandfatherName
			familyName
			localizedName {
				firstName
				fatherName
				grandfatherName
				familyName
			}
			nationalId {
				idNumber
				expiryDate
			}
			nationalities {
				country {
					id
					name
				}
				countryId
			}
			maritalStatus {
				id
				name
			}
			dependants
		}
	}
`
