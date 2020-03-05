import styled from '@emotion/styled'
import {
    Card as CardBase,
    CardMedia as CardMediaBase,
    Chip as ChipBase,
} from '@material-ui/core'

import { theme } from '~/common'

export const Root = styled(CardBase)`
    height: 100%;

    .MuiCardHeader-title {
        font-weight: 600;
    }

    .MuiTypography-overline {
        font-weight: 500;
    }
`

export const Media = styled.div`
    height: 0;
    padding-top: 56.25%;
    position: relative;
    color: ${theme.palette.common.white};

    .MuiSvgIcon-root {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 150px;
    }
`

export const CardMedia = styled(CardMediaBase)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(5px);

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: ${theme.palette.common.white};
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.25;
    }
`

export const Chip = styled(ChipBase)`
    .MuiAvatar-root {
        width: 30px;
        height: 30px;
        margin-left: 0;
        color: ${theme.palette.common.white};
    }
`
