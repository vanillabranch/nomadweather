import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/*일부컴포넌트 들을 expo에서 import 해오는 이유*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  },
   text:{
       fontSize:28,
       color:"black"
   },
});
