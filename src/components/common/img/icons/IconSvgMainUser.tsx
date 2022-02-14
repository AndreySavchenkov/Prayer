import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"

export const IconSvgMainUser = () => (
    <Svg width={17} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={17}
            height={20}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 0a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM5 12a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5H5Z"
                fill="#A369EC"
            />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#72A8BC" d="M-4-2h24v24H-4z" />
        </G>
    </Svg>
)



