/* eslint-disable react/prop-types */
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function RightArrowIcon({ color="white", h=undefined, w=undefined  }) {
    return (
        <IconArrowNarrowRight stroke={2} color={color} height={h} width={w} />
    )
}