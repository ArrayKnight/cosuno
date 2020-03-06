import React, { ChangeEvent, memo, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'

import { PAGE_SIZES } from '~/common'
import { CompaniesQueryVariables, DataMetadata, PageMetadata } from '~/graphql'
import { Company } from '../Company'
import { Footer, Root } from './styled'

interface Props {
    data: DataMetadata
    page: PageMetadata
    setPageIndex: (index: CompaniesQueryVariables['pageIndex']) => void
    setPageSize: (size: CompaniesQueryVariables['pageSize']) => void
}

export const Companies = memo(
    ({ data, page, setPageIndex, setPageSize }: Props) => {
        const id = uuid()
        const inputLabel = useRef(null)

        function updatePage(event: Event, current: number): void {
            setPageIndex(current - 1)
        }

        function updateSize(event: ChangeEvent<{ value: number }>): void {
            setPageSize(event.target.value)
        }

        return (
            <Root>
                <Grid container spacing={2}>
                    {/* TODO If loading, skeleton companies */}
                    {data.items.map((company) => (
                        <Grid
                            item
                            key={company.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Company {...company} />
                        </Grid>
                    ))}
                    {/* TODO If not loading & no companies, show no results message */}
                </Grid>
                {data.total > 0 && (
                    <Footer>
                        <span>
                            {page.index * page.size + 1} -{' '}
                            {page.index * page.size + data.items.length} of{' '}
                            {data.total}
                        </span>
                        <Pagination
                            count={page.total}
                            page={page.index + 1}
                            onChange={updatePage}
                        />
                        <FormControl variant="outlined">
                            <InputLabel ref={inputLabel} htmlFor={id}>
                                Page Size
                            </InputLabel>
                            <Select
                                input={
                                    <OutlinedInput id={id} name="page-size" />
                                }
                                value={page.size}
                                onChange={updateSize}
                            >
                                {PAGE_SIZES.map((size) => (
                                    <MenuItem key={size} value={size}>
                                        {size}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Footer>
                )}
            </Root>
        )
    },
)
