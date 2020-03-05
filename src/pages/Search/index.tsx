import React, { memo, ReactElement, useState } from 'react'

import {
    CompaniesQueryVariables,
    useCompaniesQuery,
    useSpecialtiesQuery,
} from '~/graphql'
import { Search } from './Search'

export default memo(
    (): ReactElement => {
        const [pageIndex, setPageIndex] = useState(0)
        const [pageSize, setPageSize] = useState(12)
        const [search, setSearch] = useState('')
        const [specialties, setSpecialties] = useState<
            CompaniesQueryVariables['specialties']
        >([])
        const companiesQuery = useCompaniesQuery({
            variables: {
                search,
                specialties,
                pageIndex,
                pageSize,
            },
        })
        const specialtiesQuery = useSpecialtiesQuery()

        return (
            <Search
                loading={companiesQuery.loading || specialtiesQuery.loading}
                errors={[companiesQuery.error, specialtiesQuery.error].filter(
                    Boolean,
                )}
                companies={companiesQuery.data?.companies.results || []}
                page={
                    companiesQuery.data?.companies.page || {
                        index: 0,
                        size: 0,
                        total: 0,
                    }
                }
                specialties={specialtiesQuery.data?.specialties || []}
                setSearch={setSearch}
                setSpecialties={setSpecialties}
                setPageIndex={setPageIndex}
                setPageSize={setPageSize}
            />
        )
    },
)
