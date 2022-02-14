import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import {IconSvgSettings} from "../../common/img/icons/IconSvgSettings";

export const ColumnHeader = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>To Do</Text>
                <View style={styles.subtitleContainer}>
                    <View style={styles.prayers}>
                        <Text style={styles.prayersText}>MY PRAYERS</Text>
                    </View>
                    <View style={styles.subscribed}>
                        <Text style={styles.subscribedText}>SUBSCRIBED</Text>
                        <View style={styles.circle}>
                            <Text style={styles.circleText}>3</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.icon}>
                <IconSvgSettings/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    title: {
        textAlign: 'center',
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    subtitleContainer: {
        marginTop: 22,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    prayers: {
        paddingBottom: 16,
        width: '50%',
        borderBottomWidth: 2,
        borderColor: '#72A8BC',
        alignItems: 'center',
    },
    prayersText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#72A8BC',
    },
    subscribed: {
        flexDirection: 'row',
        paddingBottom: 16,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subscribedText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#C8C8C8',
    },
    circle: {
        marginLeft: 4,
        width: 16,
        height: 16,
        backgroundColor: '#AC5253',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    circleText: {
        fontSize: 9,
        lineHeight: 11,
        color: '#fff',
    },
    icon: {
        position: 'absolute',
        top: 20,
        right: 15,
    }
});