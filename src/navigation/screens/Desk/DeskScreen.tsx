import * as React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {DeskHeader} from "./DeskHeader";
import {DeskItem} from "./DeskItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {getColumnsAction} from "../../../store/columnSlice";
import {useEffect} from "react";
import {getPrayersAction} from "../../../store/prayersSlice";
import {getCommentsAction} from "../../../store/commentsSlice";
import {addTokenFromRedux} from "../../../api/api";


export const DeskScreen = () => {

    const columns = useSelector((state: RootState) => state.column.columns);
    const dispatch = useDispatch();

    useEffect(() => {
        addTokenFromRedux()
        dispatch(getColumnsAction());
        dispatch(getPrayersAction());
        dispatch(getCommentsAction());
    }, [])

    return (
        <ScrollView style={styles.container}>
            <DeskHeader/>
            <View style={styles.columns}>
                {columns ? columns.map(item => <DeskItem key={item.id}
                                                         text={item.title}
                                                         columnId={item.id}/>) : null}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
    columns: {
        minHeight: 700,
    }
});