import { Query, Resolver } from '@nestjs/graphql'

import { Specialty } from './specialty.model'
import { SpecialtyService } from './specialty.service'

@Resolver((of) => Specialty)
export class SpecialtyResolver {
    constructor(private readonly specialtyService: SpecialtyService) {}

    @Query(() => [Specialty])
    async specialties(): Promise<Specialty[]> {
        return this.specialtyService.findAll()
    }
}
