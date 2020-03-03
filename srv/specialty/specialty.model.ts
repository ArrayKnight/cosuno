import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class Specialty {
    @Field(() => Int)
    id: number

    @Field()
    name: string
}
