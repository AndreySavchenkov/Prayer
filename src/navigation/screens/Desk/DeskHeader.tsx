import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Svg, {G, Mask, Path} from "react-native-svg";
import {useState} from "react";
import {ModalAddColumn} from "./ModalAddColumn";

export const DeskHeader = () => {
    const [isShow, setIsShow] = useState(false);

    const showModal = () => {
        setIsShow(!isShow)
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>My Desk</Text>
            </View>
            <View style={styles.iconAdd}>
                <TouchableOpacity onPress={showModal}>
                    <Svg width={22} height={22} fill="#72A8BC" xmlns="http://www.w3.org/2000/svg">
                        <Mask
                            id="a"
                            style={{
                                maskType: "alpha",
                            }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={22}
                            height={22}
                        >
                            <Path
                                d="M10 21a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1a1 1 0 1 0-2 0v9H1a1 1 0 1 0 0 2h9v9Z"
                                fill="#72A8BC"
                            />
                        </Mask>
                        <G mask="url(#a)">
                            <Path fill="#72A8BC" d="M-1-1h24v24H-1z"/>
                        </G>
                    </Svg>
                </TouchableOpacity>
            </View>
            {isShow ? <ModalAddColumn isShow={isShow} setIsShow={setIsShow}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 22,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    headerTitle: {
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    iconAdd: {
        position: 'absolute',
        top: 18,
        right: 10,
    }
});