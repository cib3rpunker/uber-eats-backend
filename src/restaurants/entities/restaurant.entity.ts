import {ObjectType, Field} from '@nestjs/graphql'

@ObjectType()
export class Restaurant {
  @Field(_returns => String)
  name: string;

  @(Field(_returns => Boolean, {nullable: true}))
  isGood?: boolean;
}