import * as React from "react";
import {ScrollView, View, StyleSheet} from "react-native";
import {ColumnHeader} from "./ColumnHeader";
import {Input} from "./Input";
import {PrayerList} from "./PrayerList";
import {Button} from "./Button";
import {PrayerListDone} from "./PrayerListDone";
import {FC} from "react";
import {prayersApi} from "../../../api/api";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";


type Props = {
    route: any
}

export const ColumnScreen: FC<Props> = ({route}) => {

    const prayers = useSelector<RootState>(state => state.prayer.prayers)

    const columnId = route.params.columnId;

    const prayersWithColumnId = prayers.filter(item => item.columnId === columnId);
    const prayersChecked = prayersWithColumnId.filter(item=> item.checked === true);
    const prayersNotChecked = prayersWithColumnId.filter(item=> item.checked === false);

    return (
        <View>
            <ColumnHeader/>
            <ScrollView>
                <Input/>
                {prayersChecked.map(item =>
                    <PrayerList key={item.id}
                                description={item.description}
                                checked={item.checked}
                                title={item.title}/>)
                }
                <View style={styles.buttonContainer}>
                    <Button text={'HIDE ANSWERED PRAYERS'}/>
                </View>
                {prayersNotChecked.map(item =>
                    <PrayerListDone key={item.id}
                                description={item.description}
                                checked={item.checked}
                                title={item.title}/>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 21,
        alignItems: 'center',
    }
})