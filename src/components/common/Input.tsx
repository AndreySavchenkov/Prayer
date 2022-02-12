import * as React from "react";
import {TextInput,StyleSheet} from "react-native";

export const Input = () => {
    return(
        <TextInput
            style={styles.input}
            placeholder="Add a prayer..."
        />
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});