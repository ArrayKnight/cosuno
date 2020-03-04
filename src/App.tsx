import React, { ReactElement } from 'react'
import { gql } from 'apollo-boost'

gql`
    query Companies(
        $search: String
        $specialties: [Int!]
        $pageSize: Int
        $pageIndex: Int
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
            results {
                id
                name
                logo
                location
                specialties {
                    id
                    name
                }
            }
        }
    }
`

export const App = (): ReactElement => {
    return <></>
}
