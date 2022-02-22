import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {IconSvgStateLine} from "../../../components/icons/IconSvgStateLine";
import {IconSvgMainUser} from "../../../components/icons/IconSvgMainUser";
import {IconSvgPrayerLine} from "../../../components/icons/IconSvgPrayerLine";
import {IconSvgCheckBoxOn} from "../../../components/icons/IconSvgCheckBoxOn";
import {FC} from "react";

type Props = {
    title: string
    checked: boolean
    description: string
    prayerId: number
}

export const PrayerListDone:FC<Props> = ({title,checked,description,prayerId}) => {
    return (
        <View style={styles.listContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.line}>
                    <IconSvgStateLine color={'#72A8BC'}/>
                </View>
                <View style={styles.checkBox}>
                    <IconSvgCheckBoxOn/>
                </View>
                <Text style={styles.text}>{title}</Text>
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
    text: {
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