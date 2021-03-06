import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Routes} from "./routes";
import {DeskScreen} from "./screens/Desk/DeskScreen";
import {ColumnScreen} from "./screens/Column/ColumnScreen";
import {PrayerScreen} from "./screens/Prayer/PrayerScreen";
import {SignInScreen} from "./screens/SignIn/SignInScreen";
import {SignUpScreen} from "./screens/SignUp/SignUpScreen";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

const Stack = createNativeStackNavigator();

export const Navigator = () => {

    let token = useSelector((state: RootState) => state.login.token)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!token ? (
                    <>
                        <Stack.Screen name={Routes.SignInScreen} component={SignInScreen}
                                      options={{headerShown: false}}/>
                        <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen}
                                      options={{headerShown: false}}/>
                    </>
                ) : (
                    <>
                        <Stack.Screen name={Routes.DeskScreen} component={DeskScreen}
                                      options={{headerShown: false}}/>
                        <Stack.Screen name={Routes.ColumnScreen} component={ColumnScreen}
                                      options={{headerShown: false}}/>
                        <Stack.Screen name={Routes.PrayerScreen} component={PrayerScreen}
                                      options={{headerShown: false}}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

