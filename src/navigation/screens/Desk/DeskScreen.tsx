import * as React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {DeskHeader} from "./DeskHeader";
import {DeskItem} from "./DeskItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {getColumnsAction} from "../../../store/columnSlice";
import {useEffect} from "react";
import {getPrayersAction} from "../../../store/prayersSlice";

export const DeskScreen = () => {

    const columns = useSelector<RootState>(state => state.column.columns)
    const dispatch = useDispatch();

useEffect(()=>{ dispatch(getColumnsAction()); dispatch(getPrayersAction())}, [dispatch])

    // console.log('action => ', getColumnsAction())



    return (
        <ScrollView style={styles.container}>
            <DeskHeader/>

            {columns ? columns.map(item => <DeskItem key={item.id} columnId={item.id} text={item.title}/>)

                // <DeskItem text={'To Do'}/>
                // <DeskItem text={'In Progress'}/>
                // <DeskItem text={'Completed'}/>
          : null}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
});