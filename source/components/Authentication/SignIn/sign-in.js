import React, {useContext, useEffect, useState} from 'react'
import {View, TextInput, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform} from 'react-native'

import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'


const SignIn = () => { 

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome to Courses!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Username (or Email)</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name =  "user-o"
                        color = "#05375a"
                        size = {20}
                    /> 
                    <TextInput
                        placeholder = ""
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                    />
                    <Feather 
                        name = "check-circle"
                        color = "grey"
                        size = {20}
                    />
                </View>
                <Text style={[styles.text_footer, {marginTop: 30}]}>Your password</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name =  "lock"
                        color = "#05375a"
                        size = {20}
                    /> 
                    <TextInput
                        placeholder = ""
                        secureTextEntry = {true}
                        style = {styles.textInput}
                        autoCapitalize = 'none'
                    />
                    <Feather 
                        name = "eye-off"
                        color = "grey"
                        size = {20}
                    />
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors = {['#08d4c4', '#01ab9d']}
                        style = {styles.signIn}
                    >
                        <Text style={styles.textSign}>Sign In</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingHorizontal: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10, 
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        color: '#05375a',
        paddingLeft: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: "100",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
  });

  export default SignIn