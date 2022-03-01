import * as React from "react";
import {Image,  View} from "react-native";

export const AvatarWithImage = () => {
    return(
        <View>
            <Image style={{width: 50, height: 50}}
                   source={require('../../assets/img/avatar.png')} />
        </View>
    )
}

