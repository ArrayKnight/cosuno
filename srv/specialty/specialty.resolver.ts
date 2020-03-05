import { Query, Resolver } from '@nestjs/graphql'

import { Specialty } from './specialty.model'
import { SpecialtyService } from './specialty.service'

@Resolver(() => Specialty)
export class SpecialtyResolver {
    constructor(private readonly specialtyService: SpecialtyService) {}

    @Query(() => [Specialty], { name: 'specialties' })
    async getSpecialties(): Promise<Specialty[]> {
        return this.specialtyService.findAll()
    }
}
