import * as React from "react";
import {ScrollView, View} from "react-native";
import {PrayerHeader} from "./PrayerHeader";
import {PrayerDateChange} from "./PrayerDateChange";
import {PrayerStatistics} from "./PrayerStatistics";
import {PrayerMembers} from "./PrayerMembers";
import {PrayerComments} from "./PrayerComments";

export const PrayerScreen = ({route}) => {



    return (
        <View>
            <PrayerHeader/>
            <ScrollView>
                <PrayerDateChange/>
                <PrayerStatistics/>
                <PrayerMembers/>
                <PrayerComments/>
            </ScrollView>
        </View>
    )
}