import * as React from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {ColumnHeader} from "./ColumnHeader";
import {Input} from "./Input";
import {PrayerList} from "./PrayerList";
import {Button} from "./Button";
import {PrayerListDone} from "./PrayerListDone";
import {FC} from "react";


type Props = {
   route: any
}

export const ColumnScreen:FC<Props> = ({route}) => {
console.log(route)

    const columnId = route.params.columnId;
    console.log('columnId->', columnId)

    return (
        <View>
            <ColumnHeader/>
            <ScrollView>
            <Input/>
                <PrayerList/>
                <PrayerList/>
                <PrayerList/>
                <View style={styles.buttonContainer}>
                    <Button text={'HIDE ANSWERED PRAYERS'}/>
                </View>
                <PrayerListDone/>
                <PrayerListDone/>
                <PrayerListDone/>
            </ScrollView>
            {/*<ScrollView>*/}
            {/*    <PrayerList/>*/}
            {/*    <PrayerList/>*/}
            {/*    <PrayerList/>*/}
            {/*    <PrayerList/>*/}
            {/*    <PrayerList/>*/}
            {/*    <View style={styles.buttonContainer}>*/}
            {/*        <Button text={'SHOW ANSWERED PRAYERS'}/>*/}
            {/*    </View>*/}
            {/*</ScrollView>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 21,
        alignItems: 'center',
    }
})