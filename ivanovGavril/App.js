import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextComponent, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
    let [count, setCount] = useState(0);
    
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto"/>
            <Text>{count}</Text>
            <Button title="+" onPress={() => {setCount(count + 1)}}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
