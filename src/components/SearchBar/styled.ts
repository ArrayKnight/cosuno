import styled from '@emotion/styled'
import { Paper } from '@material-ui/core'

import { theme } from '~/common'

export const Root = styled(Paper)`
    padding: ${theme.spacing(3)}px;
    margin-bottom: ${theme.spacing(2)}px;

    form {
        display: flex;
        align-items: center;
    }
`

export const Search = styled.div`
    margin: 0 auto 0 ${theme.spacing(1)}px;
    display: grid;
    grid-template-areas: 'content';

    .MuiCircularProgress-root,
    .MuiFab-root {
        grid-area: content;
    }

    .MuiFab-root {
        margin: 4px;
    }
`
