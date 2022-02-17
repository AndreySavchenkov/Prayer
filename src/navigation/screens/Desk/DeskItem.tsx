import * as React from "react";
import {View, StyleSheet, Text,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../routes";
import {FC} from "react";





type Props = {
    text: string,
    columnId: number,
}
export const DeskItem:FC<Props> = ({text, columnId}) => {

const navigation = useNavigation();



console.log('columnId in deskItem=>', columnId)

    return (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.ColumnScreen, {columnId})}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>

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