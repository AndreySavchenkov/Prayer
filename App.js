import React from 'react';
import {Button} from './src/components/common/button/Button'

import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import {IconSvgMenu} from "./src/components/common/icons/IconSvgMenu";
import {IconSvgBack} from "./src/components/common/icons/IconSvgBack";
import {IconSvgTrash} from "./src/components/common/icons/IconSvgTrash";
import {IconSvgUser} from "./src/components/common/icons/IconSvgUser";
import {IconSvgPrayer} from "./src/components/common/icons/IconSvgPrayer";
import {IconSvgPrayerLine} from "./src/components/common/icons/IconSvgPrayerLine";
import {IconSvgAdd} from "./src/components/common/icons/IconSvgAdd";
import {IconSvgUserPlus} from "./src/components/common/icons/IconSvgUserPlus";



const App = () => {

    return (
        <SafeAreaView>
            <Button text={'Show Answered Prayers'}/>
            <IconSvgMenu/>
            <IconSvgBack/>
            <IconSvgTrash/>
            <IconSvgUser/>
            <IconSvgPrayer/>
            <IconSvgPrayerLine/>
            <IconSvgAdd/>
            <IconSvgUserPlus/>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
