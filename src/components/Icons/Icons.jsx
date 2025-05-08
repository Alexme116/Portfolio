/* eslint-disable react/prop-types */
import { IconArrowNarrowRight, IconMenu2, IconLanguage, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

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

export function GithubIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconBrandGithub stroke={2} color={color} height={h} width={w} />
    )
}

export function LinkedinIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconBrandLinkedin stroke={2} color={color} height={h} width={w} />
    )
}