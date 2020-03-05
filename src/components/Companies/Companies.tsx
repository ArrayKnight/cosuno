import React, { memo } from 'react'
import { Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import {
    CompaniesQueryVariables,
    Company as CompanyType,
    PageMetadata,
} from '~/graphql'
import { Company } from '../Company'
import { Root } from './styled'

interface Props {
    companies: CompanyType[]
    page: PageMetadata
    setPageIndex: (index: CompaniesQueryVariables['pageIndex']) => void
    setPageSize: (size: CompaniesQueryVariables['pageSize']) => void
}

export const Companies = memo(({ companies, page, setPageIndex }: Props) => {
    function updatePage(event: Event, current: number): void {
        setPageIndex(current - 1)
    }

    return (
        <Root>
            <Grid container spacing={2}>
                {companies.map((company) => (
                    <Grid item key={company.id} xs={12} sm={6} md={4} lg={3}>
                        <Company {...company} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={page.total}
                page={page.index + 1}
                onChange={updatePage}
            />
        </Root>
    )
})
