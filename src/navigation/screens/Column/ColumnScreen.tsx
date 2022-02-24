import * as React from "react";
import {ScrollView, View, StyleSheet, Text} from "react-native";
import {ColumnHeader} from "./ColumnHeader";
import {Input} from "./Input";
import {PrayerList} from "./PrayerList";
import {Button} from "./Button";
import {FC, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";


type Props = {
    route: any
}

export const ColumnScreen: FC<Props> = ({route}) => {

    const [isShow, setIsShow] = useState(false)

    const prayers = useSelector((state:RootState) => state.prayer.prayers)

    const columnId = route.params.columnId;

    const prayersWithColumnId = prayers.filter(item => item.columnId === columnId);
    const prayersChecked = prayersWithColumnId.filter(item => item.checked === true);
    const prayersNotChecked = prayersWithColumnId.filter(item => item.checked === false);

    const showAnswers = () => setIsShow(true);
    const hideAnswers = () => setIsShow(false);

    return (
        <View>
            <ColumnHeader/>
            <View>
                <Input columnId={columnId}/>
                {prayersChecked.map(item =>
                    <PrayerList key={item.id}
                                prayerId={item.id}
                                description={item.description}
                                checked={item.checked}
                                title={item.title}/>)
                }
                {isShow ?
                    <View style={styles.buttonContainer}>
                        <Button text={'HIDE ANSWERED PRAYERS'} pressHandler={hideAnswers}/>
                    </View>
                    :
                    <View style={styles.buttonContainer}>
                        <Button text={'SHOW ANSWERED PRAYERS'} pressHandler={showAnswers}/>
                    </View>
                }
                {isShow ?
                    prayersNotChecked.map(item =>
                        <PrayerList key={item.id}
                                    prayerId={item.id}
                                    description={item.description}
                                    checked={item.checked}
                                    title={item.title}/>) : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 21,
        alignItems: 'center',
    }
})