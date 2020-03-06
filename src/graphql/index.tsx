import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type Company = {
    __typename?: 'Company'
    id: Scalars['Int']
    name: Scalars['String']
    logo: Scalars['String']
    location: Scalars['String']
    specialties: Array<Specialty>
}

export type CompanyDb = {
    __typename?: 'CompanyDB'
    id: Scalars['Int']
    name: Scalars['String']
    logo: Scalars['String']
    location: Scalars['String']
    specialties: Array<Scalars['Int']>
}

export type DataMetadata = {
    __typename?: 'DataMetadata'
    items: Array<Company>
    total: Scalars['Int']
}

export type PageMetadata = {
    __typename?: 'PageMetadata'
    index: Scalars['Int']
    size: Scalars['Int']
    total: Scalars['Int']
}

export type PaginatedData = {
    __typename?: 'PaginatedData'
    data: DataMetadata
    page: PageMetadata
}

export type Query = {
    __typename?: 'Query'
    specialties: Array<Specialty>
    companies: PaginatedData
}

export type QueryCompaniesArgs = {
    search: Maybe<Scalars['String']>
    specialties: Maybe<Array<Scalars['Int']>>
    pageIndex: Maybe<Scalars['Int']>
    pageSize: Maybe<Scalars['Int']>
}

export type Specialty = {
    __typename?: 'Specialty'
    id: Scalars['Int']
    name: Scalars['String']
}

export type SpecialtiesQueryVariables = {}

export type SpecialtiesQuery = { __typename?: 'Query' } & {
    specialties: Array<
        { __typename?: 'Specialty' } & Pick<Specialty, 'id' | 'name'>
    >
}

export type CompaniesQueryVariables = {
    search: Scalars['String']
    specialties: Array<Scalars['Int']>
    pageSize: Scalars['Int']
    pageIndex: Scalars['Int']
}

export type CompaniesQuery = { __typename?: 'Query' } & {
    companies: { __typename?: 'PaginatedData' } & {
        page: { __typename?: 'PageMetadata' } & Pick<
            PageMetadata,
            'index' | 'size' | 'total'
        >
        data: { __typename?: 'DataMetadata' } & Pick<DataMetadata, 'total'> & {
                items: Array<
                    { __typename?: 'Company' } & Pick<
                        Company,
                        'id' | 'name' | 'logo' | 'location'
                    > & {
                            specialties: Array<
                                { __typename?: 'Specialty' } & Pick<
                                    Specialty,
                                    'id' | 'name'
                                >
                            >
                        }
                >
            }
    }
}

export const SpecialtiesDocument = gql`
    query Specialties {
        specialties {
            id
            name
        }
    }
`

/**
 * __useSpecialtiesQuery__
 *
 * To run a query within a React component, call `useSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialtiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSpecialtiesQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        SpecialtiesQuery,
        SpecialtiesQueryVariables
    >,
) {
    return ApolloReactHooks.useQuery<
        SpecialtiesQuery,
        SpecialtiesQueryVariables
    >(SpecialtiesDocument, baseOptions)
}
export function useSpecialtiesLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        SpecialtiesQuery,
        SpecialtiesQueryVariables
    >,
) {
    return ApolloReactHooks.useLazyQuery<
        SpecialtiesQuery,
        SpecialtiesQueryVariables
    >(SpecialtiesDocument, baseOptions)
}
export type SpecialtiesQueryHookResult = ReturnType<typeof useSpecialtiesQuery>
export type SpecialtiesLazyQueryHookResult = ReturnType<
    typeof useSpecialtiesLazyQuery
>
export type SpecialtiesQueryResult = ApolloReactCommon.QueryResult<
    SpecialtiesQuery,
    SpecialtiesQueryVariables
>
export const CompaniesDocument = gql`
    query Companies(
        $search: String!
        $specialties: [Int!]!
        $pageSize: Int!
        $pageIndex: Int!
    ) {
        companies(
            search: $search
            specialties: $specialties
            pageSize: $pageSize
            pageIndex: $pageIndex
        ) {
            page {
                index
                size
                total
            }
            data {
                items {
                    id
                    name
                    logo
                    location
                    specialties {
                        id
                        name
                    }
                }
                total
            }
        }
    }
`

/**
 * __useCompaniesQuery__
 *
 * To run a query within a React component, call `useCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompaniesQuery({
 *   variables: {
 *      search: // value for 'search'
 *      specialties: // value for 'specialties'
 *      pageSize: // value for 'pageSize'
 *      pageIndex: // value for 'pageIndex'
 *   },
 * });
 */
export function useCompaniesQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        CompaniesQuery,
        CompaniesQueryVariables
    >,
) {
    return ApolloReactHooks.useQuery<CompaniesQuery, CompaniesQueryVariables>(
        CompaniesDocument,
        baseOptions,
    )
}
export function useCompaniesLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        CompaniesQuery,
        CompaniesQueryVariables
    >,
) {
    return ApolloReactHooks.useLazyQuery<
        CompaniesQuery,
        CompaniesQueryVariables
    >(CompaniesDocument, baseOptions)
}
export type CompaniesQueryHookResult = ReturnType<typeof useCompaniesQuery>
export type CompaniesLazyQueryHookResult = ReturnType<
    typeof useCompaniesLazyQuery
>
export type CompaniesQueryResult = ApolloReactCommon.QueryResult<
    CompaniesQuery,
    CompaniesQueryVariables
>

export interface IntrospectionResultData {
    __schema: {
        types: {
            kind: string
            name: string
            possibleTypes: {
                name: string
            }[]
        }[]
    }
}
const result: IntrospectionResultData = {
    __schema: {
        types: [],
    },
}
export default result
