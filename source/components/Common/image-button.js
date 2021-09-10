import React from "react";
import {View, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';



const ImageButton = (props) => {
    return <ImageBackground style = {styles.button} source ={{uri: 'https://miro.medium.com/max/2000/1*FEk0jO2b0rADpuPJShHjhg.png'}}>
        <TouchableOpacity 
            style ={styles.touch}
            onPress = {props.onPress}
        >
            <Text style = {styles.text}> {props.title} </Text>
        </TouchableOpacity>
    </ImageBackground>
}
const styles = StyleSheet.create({
    button: {
        height: 100, 
        
        margin: 5,
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default ImageButton