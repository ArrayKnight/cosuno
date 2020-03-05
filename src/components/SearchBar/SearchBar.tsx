import React, { memo, ReactElement } from 'react'

import { CompaniesQueryVariables, Specialty } from '~/graphql'

interface Props {
    specialties: Specialty[]
    setSearch: (search: CompaniesQueryVariables['search']) => void
    setSpecialties: (
        specialties: CompaniesQueryVariables['specialties'],
    ) => void
}

export const SearchBar = memo(
    ({ specialties }: Props): ReactElement => {
        return <></>
    },
)
