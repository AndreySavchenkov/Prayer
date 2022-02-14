import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {IconSvgStateLine} from "../icons/IconSvgStateLine";
import {IconSvgCheckBoxOff} from "../icons/IconSvgCheckBoxOff";
import {IconSvgMainUser} from "../icons/IconSvgMainUser";
import {IconSvgPrayerLine} from "../icons/IconSvgPrayerLine";
import {IconSvgCheckBoxOn} from "../icons/IconSvgCheckBoxOn";

export const PrayerListDone = () => {
    return (
        <View style={styles.listContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.line}>
                    <IconSvgStateLine/>
                </View>
                <View style={styles.checkBox}>
                    <IconSvgCheckBoxOn/>
                </View>
                <Text style={styles.textComment}>Prayer item two...</Text>
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
        textDecorationLine: 'line-through',
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