import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

import { CompanyModule } from './company'
import { SpecialtyModule } from './specialty'

@Module({
    imports: [
        CompanyModule,
        SpecialtyModule,
        GraphQLModule.forRoot({
            autoSchemaFile: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
