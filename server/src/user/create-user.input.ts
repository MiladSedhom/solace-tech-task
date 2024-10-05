import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class LocalizedNameInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field()
  localizedName: LocalizedNameInput;

  @Field()
  nationalId: NationalIdInput;

  @Field(() => [Int])
  nationalityIds: number[];

  @Field(() => Int)
  maritalStatusId: number;

  @Field(() => Int)
  dependants: number;
}
