import * as React from "react";
import {View} from "react-native";
import {PrayerHeader} from "./PrayerHeader";
import {PrayerDateChange} from "./PrayerDateChange";
import {PrayerStatistics} from "./PrayerStatistics";

export const Prayer = () => {
    return (
        <View>
            <PrayerHeader/>
            <PrayerDateChange/>
            <PrayerStatistics/>
        </View>
    )
}