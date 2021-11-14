import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get("window");

//console.log(SCREEN_WIDTH);

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Seoul</Text>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                indicatorStyle="white" /*  ios에서만 작동함. */
                contentContainerStyle={styles.weather}>
                {/* 일자별 View컴포넌트  1*/}
                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                {/* 일자별 View컴포넌트  2*/}
                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                {/* 일자별 View컴포넌트  3*/}
                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
                {/* 일자별 View컴포넌트  4*/}
                <View style={styles.day}>
                    <Text style={styles.temp}>27</Text>
                    <Text style={styles.description}>Sunny</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato"
    },
    city: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    cityName: {
        fontSize: 68,
        fontWeight: "500"
    },
    weather: {

    },
    day: {
        width: SCREEN_WIDTH,
        alignItems: "center",
    },
    temp: {
        marginTop: 50,
        fontSize: 178
    },
    description: {
        marginTop: -30,
        fontSize: 60
    }
});
