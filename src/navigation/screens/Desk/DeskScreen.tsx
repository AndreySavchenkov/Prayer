import * as React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {DeskHeader} from "./DeskHeader";
import {DeskItem} from "./DeskItem";

export const DeskScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <DeskHeader/>
            <DeskItem text={'To Do'}/>
            <DeskItem text={'In Progress'}/>
            <DeskItem text={'Completed'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {},
});