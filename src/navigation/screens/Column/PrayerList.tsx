import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {IconSvgStateLine} from "../../../components/icons/IconSvgStateLine";
import {IconSvgCheckBoxOff} from "../../../components/icons/IconSvgCheckBoxOff";
import {IconSvgMainUser} from "../../../components/icons/IconSvgMainUser";
import {IconSvgPrayerLine} from "../../../components/icons/IconSvgPrayerLine";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../routes";



export const PrayerList = () => {

  const navigation = useNavigation()

    return (
        <View style={styles.listContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.line}>
                    <IconSvgStateLine/>
                </View>
                <View style={styles.checkBox}>
                    <IconSvgCheckBoxOff/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.PrayerScreen)}>
                    <Text style={styles.textComment}>Prayer item two...</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
                <IconSvgMainUser/>
                <Text style={styles.number}>3</Text>
                <View style={styles.prayerLine}>
                    <IconSvgPrayerLine/>
                </View>
                <Text style={styles.number}>123</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 9,
        borderBottomWidth: 1,
        borderColor: '#E8E9ED',
    },
    line: {
        marginRight: 15,
    },
    checkBox: {
        marginRight: 15,
    },
    textComment: {
        fontSize: 17,
        lineHeight: 20,
        color: '#40435B',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        marginLeft: 5,
        fontSize: 12,
        lineHeight: 14,
        color: '#40435B',
    },
    prayerLine: {
        marginLeft: 20,
    }
});