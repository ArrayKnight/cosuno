import { Module } from '@nestjs/common'

import { SpecialtyResolver } from './specialty.resolver'
import { SpecialtyService } from './specialty.service'

@Module({
    providers: [SpecialtyResolver, SpecialtyService],
    exports: [SpecialtyService],
})
export class SpecialtyModule {}
