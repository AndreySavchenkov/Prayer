import React from 'react';
import {Button} from './src/components/common/button/Button';


import {
    Image,
    SafeAreaView,
    StyleSheet, View,
} from 'react-native';

import {IconSvgMenu} from "./src/components/common/img/icons/IconSvgMenu";
import {IconSvgBack} from "./src/components/common/img/icons/IconSvgBack";
import {IconSvgTrash} from "./src/components/common/img/icons/IconSvgTrash";
import {IconSvgUser} from "./src/components/common/img/icons/IconSvgUser";
import {IconSvgPrayer} from "./src/components/common/img/icons/IconSvgPrayer";
import {IconSvgPrayerLine} from "./src/components/common/img/icons/IconSvgPrayerLine";
import {IconSvgUserPlus} from "./src/components/common/img/icons/IconSvgUserPlus";
import {IconSvgEdit} from "./src/components/common/img/icons/IconSvgEdit";
import {IconSvgState} from "./src/components/common/img/icons/IconSvgState";
import {IconSvgStateLine} from "./src/components/common/img/icons/IconSvgStateLine";
import {IconSvgMainUser} from "./src/components/common/img/icons/IconSvgMainUser";
import {IconSvgCheckBoxOff} from "./src/components/common/img/icons/IconSvgCheckBoxOff";
import {IconSvgCheckBoxOn} from "./src/components/common/img/icons/IconSvgCheckBoxOn";
import {AvatarWithImage} from "./src/components/common/img/avatars/AvatarWithImage";
import {AvatarWithAlphabet} from "./src/components/common/img/avatars/AvatarWithAlphabet";
import {Input} from "./src/components/common/Input";
import {Comment} from "./src/components/common/img/lists/Comment";



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
            <IconSvgUserPlus/>
            <IconSvgEdit/>
            <IconSvgState/>
            <IconSvgStateLine/>
            <IconSvgMainUser/>
            <IconSvgCheckBoxOff/>
            <IconSvgCheckBoxOn/>

            <AvatarWithImage/>
            <AvatarWithAlphabet/>

            <Input/>
            <Comment/>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
