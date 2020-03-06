import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'

import { Specialty, SpecialtyService } from '../specialty'
import { Company, CompanyArgs, PaginatedData } from './company.model'
import { CompanyService } from './company.service'

@Resolver(() => Company)
export class CompanyResolver {
    constructor(
        private readonly companyService: CompanyService,
        private readonly specialtyService: SpecialtyService,
    ) {}

    @Query(() => PaginatedData, { name: 'companies' })
    async getCompanies(
        @Args()
        args: CompanyArgs,
    ): Promise<PaginatedData> {
        const search = `${args.search ?? ''}`.trim()
        const specialties = args.specialties ?? []
        const index = args.pageIndex ?? 0
        const size = args.pageSize ?? -1
        const shouldPaginate = size > 0
        const companies = this.companyService.findAllWith(search, specialties)
        const items = shouldPaginate
            ? companies.slice(index * size, index * size + size)
            : companies

        // TODO sort results by relevance/name

        return {
            data: {
                items,
                total: companies.length,
            },
            page: {
                index,
                size,
                total: shouldPaginate ? Math.ceil(companies.length / size) : 1,
            },
        }
    }

    @ResolveProperty('specialties', () => [Specialty])
    async getSpecialties(@Parent() { specialties }): Promise<Specialty[]> {
        return this.specialtyService.findManyByIds(specialties)
    }
}
