import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {AvatarWithImage} from "../../../components/avatars/AvatarWithImage";


export const Comment = () => {
    return (
        <View style={styles.commentContainer}>
            <AvatarWithImage/>
            <View style={styles.textContainer}>
                <View style={styles.textTitleContainer}>
                    <Text style={styles.name}>Anna Barber</Text>
                    <Text style={styles.date}>2 days ago</Text>
                </View>
                <Text style={styles.text}>Hey, Hey!</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 9,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    textContainer: {
        marginLeft: 9,
    },
    textTitleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    date: {
        marginLeft: 6,
        fontSize: 13,
        lineHeight: 15,
        color: '#9C9C9C',
    },
    text: {
        marginTop: 2,
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    }
});

