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
        {
            search = '',
            specialties = [],
            pageIndex = 0,
            pageSize = -1,
        }: CompanyArgs,
    ): Promise<PaginatedCompanies> {
        const shouldPaginate = pageSize > 0
        const companies = (this.companyService.findAllWith(
            search,
            specialties,
        ) as unknown) as Company[] // TODO remove type casting (@ResolveProperty('specialties') below converts CompanyDB to Company, but service doesn't know)

        return {
            results: shouldPaginate
                ? companies.slice(
                      pageIndex * pageSize,
                      pageIndex * pageSize + pageSize,
                  )
                : companies,
            pageIndex,
            pageSize,
            pageTotal: shouldPaginate
                ? Math.ceil(companies.length / pageSize)
                : 1,
        }
    }

    @ResolveProperty('specialties', (returns) => [Specialty])
    async getSpecialties(@Parent() { specialties }): Promise<Specialty[]> {
        return this.specialtyService.findManyByIds(specialties)
    }
}
