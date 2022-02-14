import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {FC} from "react";

type Props = {
    text: string,
}
export const MyDeskItem:FC<Props> = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 4,
    },
    text: {
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
});