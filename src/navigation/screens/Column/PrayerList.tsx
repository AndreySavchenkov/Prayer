import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {IconSvgStateLine} from "../../../components/icons/IconSvgStateLine";
import {IconSvgCheckBoxOff} from "../../../components/icons/IconSvgCheckBoxOff";
import {IconSvgMainUser} from "../../../components/icons/IconSvgMainUser";
import {IconSvgPrayerLine} from "../../../components/icons/IconSvgPrayerLine";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../routes";
import {FC, useEffect} from "react";
import {IconSvgCheckBoxOn} from "../../../components/icons/IconSvgCheckBoxOn";
import {useDispatch} from "react-redux";
import {checkedPrayerAction, deletePrayerAction, unCheckedPrayerAction} from "../../../store/prayersSlice";
import {SwipeRow} from "react-native-swipe-list-view";

type Props = {
    title: string
    checked: boolean
    description: string
    prayerId: number
}

export const PrayerList: FC<Props> = ({title, checked, description, prayerId}) => {

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const checkedHandler = () => dispatch(checkedPrayerAction(prayerId))
    const unCheckedHandler = () => dispatch(unCheckedPrayerAction(prayerId))
    const deleteHandler = () => dispatch(deletePrayerAction(prayerId))

    return (
        <SwipeRow rightOpenValue={-80}>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteHandler}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <View style={styles.leftContainer}>
                    <View style={styles.line}>
                        <IconSvgStateLine color={'#72A8BC'}/>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.checkBox}>
                            {checked ?
                                <TouchableOpacity onPress={checkedHandler}>
                                    <IconSvgCheckBoxOff/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={unCheckedHandler}>
                                    <IconSvgCheckBoxOn/>
                                </TouchableOpacity>
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(Routes.PrayerScreen, {title, checked, description})}>
                        <Text style={checked ? styles.text : styles.textChecked}>{title}</Text>
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
        </SwipeRow>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: '#AC5253',
        width: 80,
        height: 68,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteText: {
        fontSize: 13,
        lineHeight: 15,
        color: '#FFFFFF'
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 9,
        borderBottomWidth: 1,
        borderColor: '#E8E9ED',
        backgroundColor: '#E5E5E5',
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
    textChecked: {
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