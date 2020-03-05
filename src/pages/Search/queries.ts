import { gql } from 'apollo-boost'

gql`
    query Specialties {
        specialties {
            id
            name
        }
    }

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
