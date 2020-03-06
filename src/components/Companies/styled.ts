import styled from '@emotion/styled'
import { Paper } from '@material-ui/core'

import { theme } from '~/common'

export const Root = styled.div``

export const Footer = styled(Paper)`
    padding: ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px
        ${theme.spacing(2)}px;
    margin-top: ${theme.spacing(2)}px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(12px, 4px) scale(0.75);
    }

    .MuiSelect-root {
        width: 40px;
    }
`
