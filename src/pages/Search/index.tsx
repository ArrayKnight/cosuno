import React, { memo, ReactElement, useState } from 'react'

import { PAGE_SIZES } from '~/common'
import {
    CompaniesQueryVariables,
    useCompaniesQuery,
    useSpecialtiesQuery,
} from '~/graphql'
import { Search } from './Search'

export default memo(
    (): ReactElement => {
        const [variables, setVariables] = useState<CompaniesQueryVariables>({
            search: '',
            specialties: [],
            pageIndex: 0,
            pageSize: PAGE_SIZES[0],
        })
        const companiesQuery = useCompaniesQuery({ variables })
        const specialtiesQuery = useSpecialtiesQuery()

        function set<
            K extends keyof CompaniesQueryVariables,
            V extends CompaniesQueryVariables[K]
        >(key: K): (value: V) => void {
            return (value) => {
                setVariables({
                    ...variables,
                    pageIndex: 0,
                    [key]: value,
                })
            }
        }

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
                setSearch={set('search')}
                setSpecialties={set('specialties')}
                setPageIndex={set('pageIndex')}
                setPageSize={set('pageSize')}
            />
        )
    },
)
