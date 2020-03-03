import { Min } from 'class-validator'
import { ArgsType, Field, Int, ObjectType } from 'type-graphql'

import { Specialty } from '@/specialty'

@ObjectType()
export class CompanyDB {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    logo: string

    @Field()
    location: string

    @Field(() => [Int])
    specialties: number[]
}

@ObjectType()
export class Company {
    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field()
    logo: string

    @Field()
    location: string

    @Field(() => [Specialty])
    specialties: Specialty[]
}

@ObjectType()
export class PaginatedCompanies {
    @Field(() => [Company])
    results: Company[]

    @Field(() => Int)
    pageIndex: number

    @Field(() => Int)
    pageSize: number

    @Field(() => Int)
    pageTotal: number
}

@ArgsType()
export class CompanyArgs {
    @Field({ nullable: true })
    search?: string

    @Field(() => [Int], { nullable: true })
    specialties?: number[]

    @Field(() => Int, { nullable: true })
    @Min(0)
    pageIndex?: number

    @Field(() => Int, { nullable: true })
    @Min(1)
    pageSize?: number
}
