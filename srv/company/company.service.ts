import { cloneDeep } from 'lodash'
import { Injectable } from '@nestjs/common'

import { companies } from '@/data'
import { CompanyDB } from './company.model'

@Injectable()
export class CompanyService {
    findAll(): CompanyDB[] {
        return cloneDeep(companies)
    }

    findAllWith(name: string, specialties: number[]): CompanyDB[] {
        const filterByName = name.length > 0
        const filterBySpecialties = specialties.length > 0

        if (!filterByName && !filterBySpecialties) {
            return this.findAll()
        }

        return this.findAll().filter(
            (company) =>
                (!filterByName ||
                    company.name.toLowerCase().includes(name.toLowerCase())) &&
                (!filterBySpecialties ||
                    company.specialties.some((id) => specialties.includes(id))),
        )
    }
}
