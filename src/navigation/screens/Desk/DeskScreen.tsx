import * as React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {DeskHeader} from "./DeskHeader";
import {DeskItem} from "./DeskItem";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export const DeskScreen = () => {

    const columns = useSelector<RootState>(state => state.column.columns)



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