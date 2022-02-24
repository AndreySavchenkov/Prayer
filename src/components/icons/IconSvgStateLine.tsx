import * as React from "react"
import Svg, { Mask, Path, G ,Rect} from "react-native-svg"
import {FC} from "react";

type Props = {
    color: string
}
export const IconSvgStateLine:FC<Props> = ({color}) => {
    return(
        <Svg width={3} height={22} fill="none">
            <Mask
                id="a"
                x={0}
                y={0}
                width={3}
                height={22}
            >
                <Rect width={3} height={22} rx={1.5} fill={color} />
            </Mask>
            <G mask="url(#a)">
                <Path fill={color} d="M-12-1h24v24h-24z" />
            </G>
        </Svg>
    )
}






