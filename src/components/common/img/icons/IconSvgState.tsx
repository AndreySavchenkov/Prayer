import * as React from "react"
import Svg, { Mask, Path, G ,Circle} from "react-native-svg"

export const IconSvgState = () => (
    <Svg width={7} height={7} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={7}
            height={7}
        >
            <Circle cx={3.5} cy={3.5} r={3.5} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#FD716A" d="M-4.9-4.9h16.8v16.8H-4.9z" />
        </G>
    </Svg>
)



