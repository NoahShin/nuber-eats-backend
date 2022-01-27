import { ArgsType, Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsString, Length } from "class-validator";


@ArgsType()
export class CreateRestaurantDto {
  @Field(type => String)
  @Length(5,10)
  @IsString()
  name: string
  @IsBoolean()
  @Field(type => Boolean)
  isVegan?: boolean
  @IsString()
  @Field(type => String)
  address: string
  @IsString()
  @Field(type => String)
  ownersName: string
}