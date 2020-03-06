import styled from '@emotion/styled'
import { Grid, Paper } from '@material-ui/core'

import { theme } from '~/common'

export const Root = styled.div``

export const Footer = styled(Paper)`
    padding: ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px
        ${theme.spacing(2)}px;
    margin-top: ${theme.spacing(2)}px;
`

export const CountGrid = styled(Grid)`
    order: 2;

    ${theme.breakpoints.up('md')} {
        order: 1;
    }
`

export const PaginationGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    order: 1;

    ${theme.breakpoints.up('md')} {
        order: 2;
    }
`

export const SizeGrid = styled(Grid)`
    display: flex;
    justify-content: flex-end;
    order: 3;

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(12px, 4px) scale(0.75);
    }

    .MuiSelect-root {
        width: 40px;
    }
`
