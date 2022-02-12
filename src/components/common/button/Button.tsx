import * as React from "react";
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {FC} from "react";

type Props = {
    text: string
}

export const Button: FC<Props> = ({text}) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
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
        boxShadow: '0px 2px 15px rgba(66, 78, 117, 0.1)',
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    }

});