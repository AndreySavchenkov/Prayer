import * as React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import Svg, {G, Mask, Path} from "react-native-svg";


export const PrayerMembers = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MEMBERS</Text>
            <View style={styles.avatarContainer}>
                <View style={styles.avatarItem}>
                    <Image style={{width: 32, height: 32}}
                           source={require('../../../assets/img/avatar.png')}/>
                </View>
                <View style={styles.avatarItem}>
                    <Image style={{width: 32, height: 32}}
                           source={require('../../../assets/img/avatar.png')}/>
                </View>
                <View style={styles.avatarItem}>
                    <Image style={{width: 32, height: 32}}
                           source={require('../../../assets/img/avatar.png')}/>
                </View>
                <View style={styles.buttonAdd}>
                    <Svg width={22} height={22} fill="none">
                        <Mask
                            id="a"
                            x={0}
                            y={0}
                            width={22}
                            height={22}
                        >
                            <Path
                                d="M10 21a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1a1 1 0 1 0-2 0v9H1a1 1 0 1 0 0 2h9v9Z"
                                fill="#fff"
                            />
                        </Mask>
                        <G mask="url(#a)">
                            <Path fill="#fff" d="M-1-1h24v24H-1z"/>
                        </G>
                    </Svg>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 28,
    },
    title: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        textTransform: 'uppercase',
        color: '#72A8BC',
    },
    avatarContainer: {
        marginTop: 13,
        marginLeft: 15,
        flexDirection: 'row',
    },
    avatarItem: {
        marginRight: 10,
    },
    buttonAdd: {
        width: 32,
        height: 32,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BFB393',
    }

})