import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const IconSvgUserPlus = () => (
    <Svg width={24} height={20} fill="none">
        <Mask
            id="a"
            x={0}
            y={0}
            width={24}
            height={20}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM5 12a5 5 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5 5 0 0 0-5-5H5Zm15-7a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V6a1 1 0 0 1 1-1Z"
                fill="#A369EC"
            />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#A369EC" d="M0-2h24v24H0z" />
        </G>
    </Svg>
)



