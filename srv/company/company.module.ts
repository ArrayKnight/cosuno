import { Module } from '@nestjs/common'

import { SpecialtyModule } from '@/specialty'
import { CompanyResolver } from './company.resolver'
import { CompanyService } from './company.service'

@Module({
    imports: [SpecialtyModule],
    providers: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
