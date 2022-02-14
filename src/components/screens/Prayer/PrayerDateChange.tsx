import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {IconSvgStateLine} from "../../common/img/icons/IconSvgStateLine";

export const PrayerDateChange = () => {
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <IconSvgStateLine color={'#AC5253'}/>
            </View>
            <Text>Last prayed 8 min ago</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 25,
    },
    icon: {
        paddingRight: 10,
    }
})