import * as React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {MyDeskHeader} from "./MyDeskHeader";
import {MyDeskItem} from "./MyDeskItem";

export const MyDesk = () => {
    return (
        <ScrollView style={styles.container}>
            <MyDeskHeader/>
            <MyDeskItem text={'To Do'}/>
            <MyDeskItem text={'In Progress'}/>
            <MyDeskItem text={'Completed'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
});