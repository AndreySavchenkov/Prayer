import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


export const PrayerStatistics = () => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.date}>
                    <Text style={styles.dataTitle}>July 25 2017</Text>
                    <Text style={styles.dataSubtitle}>Date Added</Text>
                    <Text style={styles.timeOpen}>Opened for 4 days</Text>
                </View>
                <View style={styles.total}>
                    <Text style={styles.title}>123</Text>
                    <Text style={styles.subtitle}>Times Prayed Total</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.me}>
                    <Text style={styles.title}>63</Text>
                    <Text style={styles.subtitle}>Times Prayed by Me</Text>
                </View>
                <View style={styles.other}>
                    <Text style={styles.title}>60</Text>
                    <Text style={styles.subtitle}>Times Prayed by Others</Text>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    date: {
        width: '50%',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    dataTitle: {
        marginTop: 32,
        marginLeft: 15,
        fontSize: 22,
        lineHeight: 26,
        color: '#BFB393',
    },
    dataSubtitle: {
        marginTop: 6,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        color: '#514D47',
    },
    timeOpen: {
        marginBottom: 11,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        color: '#72A8BC',
    },
    total: {
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        width: '50%',
    },
    me: {
        borderRightWidth: 1,
        borderColor: '#E5E5E5',
        width: '50%',
    },
    title: {
        marginTop: 25,
        marginLeft: 15,
        fontSize: 32,
        lineHeight: 37,
        color: '#BFB393',
    },
    subtitle: {
        marginBottom: 25,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        color: '#514D47',
    }

})