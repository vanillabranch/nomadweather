import * as Location from 'expo-location';
import React from 'react';
import {useState,useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get("window");

//console.log(SCREEN_WIDTH);

export default function App() {
    const [city, setCity] = useState();
    const [location, setLocation] = useState();
    const [ok , setOk] = useState(true);
    const ask = async ()=> {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted){
            setOk(false);
        }

        //현재 위치
        //await 사용하여 api를 사용할땐, 변수명 자리를 브레이스로 감싸주면 해당하는 값을 가져와서 처리할수 있다.
        const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
        Location.setGoogleApiKey("");
        const location = await Location.reverseGeocodeAsync({latitude,longitude},{useGoogleMaps:false});
        setCity(location[0].district);
    };
    useEffect(()=>{
        ask();
    },[]);

    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
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
