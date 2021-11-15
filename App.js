import * as Location from 'expo-location';
import React from 'react';
import {useState,useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions, ActivityIndicator} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get("window");
import * as key  from './api_key.json';
import {Ionicons,Fontisto} from '@expo/vector-icons';
import {StatusBar} from "expo-status-bar";

//실제로는 서버 등에 둬서, 관리하자. 어플리케이션에 절대 둬선 안됨.
const API_KEY = key.REACT_APP_OPEN_WEATHER_API_KEY;

//console.log(SCREEN_WIDTH);

const icons = {
    Clouds : "cloudy",
    Clear : "day-sunny",
    Atmosphere : "cloudy-gusts",
    Rain : "rains",
    Snow : "snow",
    Drizzle : "rain",
    Thunderstorm : "lightning"
}

export default function App() {
    const [city, setCity] = useState();
    const [days,setDays] = useState([]);
    const [ok , setOk] = useState(true);
    const getWeather = async ()=> {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted){
            setOk(false);
        }

        //현재 위치
        //await 사용하여 api를 사용할땐, 변수명 자리를 브레이스로 감싸주면 해당하는 값을 가져와서 처리할수 있다.
        const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
        Location.setGoogleApiKey(key.REACT_APP_GOOGLE_API_KEY);
        const location = await Location.reverseGeocodeAsync({latitude,longitude},{useGoogleMaps:false});
        setCity(location[0].district);

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`

        );
        const json = await response.json();
        setDays(json.daily);
        console.log(json);
    };
    useEffect(()=>{
        getWeather();
    },[]);

    function changeDateFormat(dt){
        var t = new Date(dt * 1000);

        return t.toLocaleDateString("ko-KR");
    }

    return (
        <View style={styles.container}>
            <StatusBar style={"light"}/>
            <View style={styles.city}>
                <Text style={styles.cityName}>{city}</Text>
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                indicatorStyle="white" /*  ios에서만 작동함. */
                contentContainerStyle={styles.weather}>

                {days.length === 0 ? (
                    <View style={{...styles.day, alignItems:"center"}}> 
                        <ActivityIndicator color={"white"} size={"large"} style={{marginTop:10}}/>
                    </View>
                ) : (
                    days.map((day,index) => (
                        <View key={index} style={styles.day}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",width:"100%"}}>
                                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}
                                </Text>
                                <Fontisto name={icons[day.weather[0].main]} size={68} color="white" />
                            </View>

                            <Text style={styles.description}>{day.weather[0].main}</Text>
                            <Text style={styles.tinyText}>{day.weather[0].description}</Text>
                            <Text style={styles.tinyText}>{changeDateFormat(day.dt)}</Text>
                        </View>
                    ))
                )}
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
        fontSize: 58,
        fontWeight: "500",
        color:"white"
    },
    weather: {

    },
    day: {
        width: SCREEN_WIDTH,
        alignItems: "flex-start",
        paddingHorizontal:20
    },
    temp: {
        marginTop: 50,
        fontWeight:"600",
        fontSize: 100,
        color:"white"
    },
    description: {
        marginTop: -10,
        fontSize: 30,
        color:"white",
        fontWeight:"500"
    },
    tinyText:{
        fontSize:25,
        marginTop:-5,
        color:"white",
        fontWeight:"500"
    }
});
