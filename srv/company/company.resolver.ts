import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql'

import { Specialty, SpecialtyService } from '../specialty'
import { Company, CompanyArgs, PaginatedCompanies } from './company.model'
import { CompanyService } from './company.service'

@Resolver(() => Company)
export class CompanyResolver {
    constructor(
        private readonly companyService: CompanyService,
        private readonly specialtyService: SpecialtyService,
    ) {}

    @Query(() => PaginatedCompanies, { name: 'companies' })
    async getCompanies(
        @Args()
        args: CompanyArgs,
    ): Promise<PaginatedCompanies> {
        const search = `${args.search ?? ''}`.trim()
        const specialties = args.specialties ?? []
        const index = args.pageIndex ?? 0
        const size = args.pageSize ?? -1
        const shouldPaginate = size > 0
        const companies = this.companyService.findAllWith(search, specialties)
        const results = shouldPaginate
            ? companies.slice(index * size, index * size + size)
            : companies

        // TODO sort results by relevance/name

        return {
            results,
            page: {
                index,
                size: results.length,
                total: shouldPaginate ? Math.ceil(companies.length / size) : 1,
            },
        }
    }

    @ResolveProperty('specialties', () => [Specialty])
    async getSpecialties(@Parent() { specialties }): Promise<Specialty[]> {
        return this.specialtyService.findManyByIds(specialties)
    }
}
