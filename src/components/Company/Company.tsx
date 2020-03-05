import React, { memo, ReactElement } from 'react'
import {
    Avatar,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@material-ui/core'
import {
    AccountBalanceTwoTone,
    ApartmentTwoTone,
    BlurOnTwoTone,
    BuildTwoTone,
    DeckTwoTone,
    DomainTwoTone,
    FilterHdrTwoTone,
    HomeTwoTone,
    HomeWorkTwoTone,
    StoreTwoTone,
} from '@material-ui/icons'

import { SpecialtyIcon } from '~/common'
import { Company as CompanyType } from '~/graphql'
import { Root, CardMedia, Chip, Media } from './styled'

const icons = [
    AccountBalanceTwoTone,
    ApartmentTwoTone,
    BlurOnTwoTone,
    BuildTwoTone,
    DeckTwoTone,
    DomainTwoTone,
    FilterHdrTwoTone,
    HomeTwoTone,
    HomeWorkTwoTone,
    StoreTwoTone,
]

export const Company = memo(
    ({ id, name, logo, location, specialties }: CompanyType): ReactElement => {
        const Icon = icons[id % icons.length]

        return (
            <Root>
                <CardHeader
                    avatar={<Avatar>{name.charAt(0)}</Avatar>}
                    title={name}
                />
                <Media>
                    <CardMedia image={logo} />
                    <Icon />
                </Media>
                <CardContent>
                    <Typography variant="overline">Located:</Typography>
                    <Typography variant="body2">{location}</Typography>
                    {specialties.length > 0 && (
                        <>
                            <Typography variant="overline">
                                Specialties:
                            </Typography>
                            <Grid container spacing={1}>
                                {specialties.map((specialty, index) => (
                                    <Grid item key={specialty.id}>
                                        <Chip
                                            avatar={
                                                <Avatar>
                                                    <SpecialtyIcon
                                                        {...specialty}
                                                    />
                                                </Avatar>
                                            }
                                            label={specialty.name}
                                            color={
                                                index === 0
                                                    ? 'primary'
                                                    : 'default'
                                            }
                                            size="small"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    )}
                </CardContent>
            </Root>
        )
    },
)
