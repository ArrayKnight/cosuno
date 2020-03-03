import { cloneDeep } from 'lodash'
import { Injectable } from '@nestjs/common'

import { specialties } from '@/data'
import { Specialty } from './specialty.model'

@Injectable()
export class SpecialtyService {
    findAll(): Specialty[] {
        return cloneDeep(specialties)
    }

    findManyByIds(ids: number[]): Specialty[] {
        return ids.reduce((found, id) => {
            const specialty = this.findOneById(id)

            if (!!specialty) {
                return [...found, specialty]
            }

            return found
        }, [])
    }

    findOneById(id: number): Specialty | null {
        const specialty = specialties.find((specialty) => specialty.id === id)

        return !!specialty ? { ...specialty } : null
    }
}
