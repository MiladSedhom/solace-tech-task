import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class LocalizedName {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  fatherName: string;

  @Field(() => String)
  grandfatherName: string;

  @Field(() => String)
  familyName: string;
}

@ObjectType()
export class MaritalStatus {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;
}

@ObjectType()
export class NationalId {
  @Field(() => String)
  idNumber: string;

  @Field(() => String)
  expiryDate: string;
}

@ObjectType()
export class Nationality {
  @Field(() => Country)
  country: Country;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  fatherName: string;

  @Field(() => String)
  grandfatherName: string;

  @Field(() => String)
  familyName: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field(() => Int)
  dependants: number;
}
