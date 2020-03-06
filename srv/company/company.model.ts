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

// TODO abstract out all pagination logic and models into generic implementation
@ObjectType()
export class DataMetadata {
    @Field(() => [Company])
    items: CompanyDB[]

    @Field(() => Int)
    total: number
}

@ObjectType()
export class PageMetadata {
    @Field(() => Int)
    index: number

    @Field(() => Int)
    size: number

    @Field(() => Int)
    total: number
}

@ObjectType()
export class PaginatedData {
    @Field(() => DataMetadata)
    data: DataMetadata

    @Field()
    page: PageMetadata
}

@ArgsType()
export class CompanyArgs {
    @Field({ nullable: true })
    search?: string

    @Field(() => [Int], { nullable: true })
    specialties?: number[]

    // TODO add operator (AND | OR) to determine how to match specialties (match all vs match any)

    // TODO add sorting options (relevance, name ascending/descending)

    @Field(() => Int, { nullable: true })
    @Min(0)
    pageIndex?: number

    @Field(() => Int, { nullable: true })
    @Min(1)
    pageSize?: number
}
