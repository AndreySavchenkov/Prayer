import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const IconSvgAdd = () => (
    <Svg width={22} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={22}
            height={22}
        >
            <Path
                d="M10 21a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1a1 1 0 1 0-2 0v9H1a1 1 0 1 0 0 2h9v9Z"
                fill="#A369EC"
            />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#A369EC" d="M-1-1h24v24H-1z" />
        </G>
    </Svg>
)



