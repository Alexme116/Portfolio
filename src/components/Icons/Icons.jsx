/* eslint-disable react/prop-types */
import { IconArrowNarrowRight, IconMenu2, IconLanguage } from '@tabler/icons-react';

export function RightArrowIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconArrowNarrowRight stroke={2} color={color} height={h} width={w} />
    )
}

export function MenuIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconMenu2 stroke={2} color={color} height={h} width={w} />
    )
}

export function TranslateIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconLanguage stroke={2} color={color} height={h} width={w} />
    )
}