import * as React from "react"
import Svg, { Mask, Path, G ,Rect} from "react-native-svg"

export const IconSvgStateLine = () => (
    <Svg width={3} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask
            id="a"
            style={{
                maskType: "alpha",
            }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={3}
            height={22}
        >
            <Rect width={3} height={22} rx={1.5} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#a)">
            <Path fill="#FD716A" d="M-12-1h24v24h-24z" />
        </G>
    </Svg>
)



