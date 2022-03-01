import * as React from "react";
import {ScrollView, View} from "react-native";
import {PrayerHeader} from "./PrayerHeader";
import {PrayerDateChange} from "./PrayerDateChange";
import {PrayerStatistics} from "./PrayerStatistics";
import {PrayerMembers} from "./PrayerMembers";
import {PrayerComments} from "./PrayerComments";
import {FC} from "react";

type Props = {
    route: any
}

export const PrayerScreen: FC<Props> = ({route}) => {

    const prayerId = route.params.prayerId;

    return (
        <ScrollView>
            <PrayerHeader/>
            <View>
                <PrayerDateChange/>
                <PrayerStatistics/>
                <PrayerMembers/>
                <PrayerComments prayerId={prayerId}/>
            </View>
        </ScrollView>
    )
}