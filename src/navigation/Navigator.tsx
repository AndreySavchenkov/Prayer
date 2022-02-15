import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./routes";
import {DeskScreen} from "./screens/Desk/DeskScreen";
import {ColumnScreen} from "./screens/Column/ColumnScreen";
import {PrayerScreen} from "./screens/Prayer/PrayerScreen";
import {SignInScreen} from "./screens/SignIn/SignInScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {

    return (
        //@ts-ignore
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Routes.SignInScreen}>
                <Stack.Screen name={Routes.SignInScreen} component={SignInScreen} options={{headerShown: false}}/>
                <Stack.Screen name={Routes.DeskScreen} component={DeskScreen} options={{headerShown: false}}/>
                <Stack.Screen name={Routes.ColumnScreen} component={ColumnScreen} options={{headerShown: false}}/>
                <Stack.Screen name={Routes.PrayerScreen} component={PrayerScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
