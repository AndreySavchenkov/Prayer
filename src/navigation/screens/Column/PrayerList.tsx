import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {IconSvgStateLine} from "../../../components/icons/IconSvgStateLine";
import {IconSvgCheckBoxOff} from "../../../components/icons/IconSvgCheckBoxOff";
import {IconSvgMainUser} from "../../../components/icons/IconSvgMainUser";
import {IconSvgPrayerLine} from "../../../components/icons/IconSvgPrayerLine";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../routes";
import {FC} from "react";
import {IconSvgCheckBoxOn} from "../../../components/icons/IconSvgCheckBoxOn";
import {useDispatch} from "react-redux";
import {checkedPrayerAction} from "../../../store/prayersSlice";

type Props = {
    title: string
    checked: boolean
    description: string
    prayerId: number
}

export const PrayerList:FC<Props> = ({title,checked, description,prayerId}) => {

  const navigation = useNavigation()
    const dispatch = useDispatch()

    const pressHandler = () => {
      dispatch(checkedPrayerAction(prayerId))
    }

    return (
        <View style={styles.listContainer}>
            <View style={styles.leftContainer}>
                <View style={styles.line}>
                    <IconSvgStateLine color={'#72A8BC'}/>
                </View>
                <TouchableOpacity onPress={pressHandler}>
                    <View style={styles.checkBox}>
                        {checked ?
                            <IconSvgCheckBoxOff/> : <IconSvgCheckBoxOn/>
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.PrayerScreen, {title,checked,description})}>
                    <Text style={styles.text}>{title}</Text>
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
    text: {
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