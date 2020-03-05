import React, { memo, ReactElement } from 'react'
import {
    AcUnitTwoTone,
    BathtubTwoTone,
    BuildTwoTone,
    EmojiEventsTwoTone,
    FlashOnTwoTone,
    FormatColorFillTwoTone,
    FormatListNumberedTwoTone,
    FormatPaintTwoTone,
    GavelTwoTone,
    GolfCourseTwoTone,
    LayersTwoTone,
    LocationCityTwoTone,
    MeetingRoomTwoTone,
    PhotoFilterTwoTone,
    SettingsTwoTone,
    SpeakerNotesTwoTone,
} from '@material-ui/icons'

import { Specialty } from '~/graphql'

const specialties = [
    FormatColorFillTwoTone,
    MeetingRoomTwoTone,
    FlashOnTwoTone,
    SettingsTwoTone,
    FormatPaintTwoTone,
    GavelTwoTone,
    BuildTwoTone,
    PhotoFilterTwoTone,
    BathtubTwoTone,
    SpeakerNotesTwoTone,
    FormatListNumberedTwoTone,
    LocationCityTwoTone,
    EmojiEventsTwoTone,
    GolfCourseTwoTone,
    AcUnitTwoTone,
    LayersTwoTone,
]

export const SpecialtyIcon = memo(
    ({ id }: Specialty): ReactElement => {
        const Icon = specialties[id]

        return <Icon />
    },
)
