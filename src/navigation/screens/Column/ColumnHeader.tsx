import * as React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {IconSvgSettings} from "../../../components/icons/IconSvgSettings";
import Svg, {G, Mask, Path} from "react-native-svg";
import {useNavigation} from "@react-navigation/native";

export const ColumnHeader = () => {

    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>To Do</Text>
                <View style={styles.subtitleContainer}>
                    <View style={styles.prayers}>
                        <Text style={styles.prayersText}>MY PRAYERS</Text>
                    </View>
                    <View style={styles.subscribed}>
                        <Text style={styles.subscribedText}>SUBSCRIBED</Text>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>3</Text>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.iconBack}>
                    <Svg width={18} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Mask
                            id="a"
                            style={{
                                maskType: "alpha",
                            }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={18}
                            height={16}
                        >
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.707 1.707A1 1 0 0 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H17a1 1 0 0 0 0-2H3.414l5.293-5.293Z"
                                fill="#72A8BC"
                            />
                        </Mask>
                        <G mask="url(#a)">
                            <Path fill="#72A8BC" d="M-3-4h24v24H-3z"/>
                        </G>
                    </Svg>
                </View>
            </TouchableOpacity>
            <View style={styles.icon}>
                <IconSvgSettings/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    title: {
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    subtitleContainer: {
        marginTop: 22,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    prayers: {
        paddingBottom: 16,
        width: '50%',
        borderBottomWidth: 2,
        borderColor: '#72A8BC',
        alignItems: 'center',
    },
    prayersText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#72A8BC',
    },
    subscribed: {
        flexDirection: 'row',
        paddingBottom: 16,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribedText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#C8C8C8',
    },
    circle: {
        marginLeft: 4,
        width: 16,
        height: 16,
        backgroundColor: '#AC5253',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    circleText: {
        fontSize: 9,
        lineHeight: 11,
        color: '#fff',
    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 15,
    },
    iconBack: {
        position: 'absolute',
        bottom: 60,
        left: 15,
    }
});