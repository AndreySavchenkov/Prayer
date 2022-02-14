import * as React from "react";
import {TouchableOpacity, Text, StyleSheet, View} from "react-native";
import {FC} from "react";

type Props = {
    text: string
}

export const Button: FC<Props> = ({text}) => {
    return (
        <TouchableOpacity  style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 209,
        height: 30,
        backgroundColor: '#BFB393',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    }

});