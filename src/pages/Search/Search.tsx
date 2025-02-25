import React, { memo, ReactElement } from 'react'
import { ApolloError } from 'apollo-boost'

import { Companies, Loading, MiniPage, SearchBar } from '~/components'
import {
    CompaniesQueryVariables,
    DataMetadata,
    PageMetadata,
    Specialty,
} from '~/graphql'
import { Typography } from '@material-ui/core'

interface Props {
    loading: boolean
    errors: ApolloError[]
    data: DataMetadata
    page: PageMetadata
    specialties: Specialty[]
    setSearch: (search: CompaniesQueryVariables['search']) => void
    setSpecialties: (
        specialties: CompaniesQueryVariables['specialties'],
    ) => void
    setPageIndex: (index: CompaniesQueryVariables['pageIndex']) => void
    setPageSize: (size: CompaniesQueryVariables['pageSize']) => void
}

export const Search = memo(
    ({
        loading,
        errors,
        data,
        page,
        specialties,
        setSearch,
        setSpecialties,
        setPageIndex,
        setPageSize,
    }: Props): ReactElement => (
        <>
            <SearchBar
                loading={loading}
                specialties={specialties}
                setSearch={setSearch}
                setSpecialties={setSpecialties}
            />
            <Companies
                data={data}
                page={page}
                setPageIndex={setPageIndex}
                setPageSize={setPageSize}
            />
            {loading && <Loading />}
            {errors.length > 0 && (
                <MiniPage
                    overlay={true}
                    headline="Oops"
                    sections={errors.map(({ name, message, stack }) => (
                        <>
                            {name && name !== 'Error' && (
                                <Typography variant="body1">{name}</Typography>
                            )}
                            {message && (
                                <Typography variant="body2">
                                    {message}
                                </Typography>
                            )}
                            {stack && (
                                <Typography variant="caption">
                                    {stack}
                                </Typography>
                            )}
                        </>
                    ))}
                />
            )}
        </>
    ),
)
