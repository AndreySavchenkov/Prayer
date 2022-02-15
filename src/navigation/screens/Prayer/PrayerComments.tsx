import * as React from "react";
import {StyleSheet, View, Text, ScrollView, TextInput} from "react-native";
import {Comment} from "./Comment";
import Svg, {Path} from "react-native-svg";

export const PrayerComments = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.commentsTitle}>COMMENTS</Text>
            </View>
            <View>
                <Comment/>
                <Comment/>
            </View>
            <View>
                <TextInput
                    style={styles.input}
                    selectionColor={'#72A8BC'}
                    placeholder="Add a comment..."
                />
                <View style={styles.addComentIcon}>
                    <Svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 2a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 5 14h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3ZM.879.879A3 3 0 0 1 3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5.414l-3.707 3.707A1 1 0 0 1 0 19V3A3 3 0 0 1 .879.879Z"
                            fill="#BFB393"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    commentsTitle: {
        marginBottom: 15,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        textTransform: 'uppercase',
        color: '#72A8BC',
    },
    input: {

        marginBottom: 20,
        paddingLeft: 50,
        width: '100%',
        height: 50,
        fontSize: 17,
        lineHeight: 20,
        color: '#9C9C9C',
    },
    addComentIcon: {
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
        top: 16,
        left: 16,
    }
})