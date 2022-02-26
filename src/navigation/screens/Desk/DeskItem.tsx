import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../../routes";
import {FC, memo} from "react";
import {IconSvgTrash} from "../../../components/icons/IconSvgTrash";
import {useDispatch} from "react-redux";
import {deleteColumn, deleteColumnAction} from "../../../store/columnSlice";


type Props = {
    text: string,
    columnId: number,
}
export const DeskItem: FC<Props> = memo(({text, columnId}) => {

    const navigation = useNavigation<any>();
    const dispatch = useDispatch();

    const pressHandler = () => {
        dispatch(deleteColumnAction(columnId))
        dispatch(deleteColumn({columnId}))
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.ColumnScreen, {columnId})}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity onPress={pressHandler}>
                    <IconSvgTrash/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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