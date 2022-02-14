import * as React from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {ColumnHeader} from "./ColumnHeader";
import {Input} from "../../common/Input";
import {PrayerList} from "../../common/img/lists/PrayerList";
import {Button} from "../../common/button/Button";
import {PrayerListDone} from "../../common/img/lists/PrayerListDone";

export const Column = () => {
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