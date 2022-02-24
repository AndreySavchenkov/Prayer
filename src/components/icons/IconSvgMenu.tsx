import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const IconSvgMenu = () => (
    <Svg width={22} height={14} fill="none">
        <Mask
            id="a"
            x={0}
            y={0}
            width={22}
            height={14}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H1Zm17 0a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3ZM1 12a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2H1Zm17 0a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2h-3ZM1.008 6C.45 6 0 6.448 0 7s.451 1 1.008 1h19.984C21.55 8 22 7.552 22 7s-.451-1-1.008-1H1.008Z"
                fill="#A369EC"
            />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#A369EC" d="M-1-5h24v24H-1z" />
        </G>
    </Svg>
)
