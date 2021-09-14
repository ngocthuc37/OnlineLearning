import React, {useContext, useEffect, useState} from 'react'
import {View, TextInput, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Platform, StatusBar} from 'react-native'

import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'


const SignUp = () => { 

    

    return (
        <View style={styles.container}>
            <View>
                <StatusBar 
                    backgroundColor='#009387' 
                    barStyle = "light-content"
                    translucent = {true} 
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
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
                <Text style={[styles.text_footer, {marginTop: 30}]}>Confirm your password</Text>
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
                        <Text style = {[styles.textSign, {color: 'white'}]}>Sign Up</Text> 
                    </LinearGradient>

                    <TouchableOpacity 
                         style = {[styles.signIn, {
                            marginTop: 15,
                            borderWidth: 1,
                            borderColor: '#009387'
                         }]}
                    >
                        <Text style = {[styles.textSign, {color: '#009387'}]}>Sign In</Text> 
                    </TouchableOpacity>
                </View>   
                
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387',
      height: Dimensions.get('window').height
    },
    header: {
        flex: 0.8,
        justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingHorizontal: 20,
        backgroundColor: '#009387'
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
        fontSize: 18,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        color: '#05375a',
        paddingLeft: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
       
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    textForgot: { 
        fontSize: 18, 
        color: '#009387',
      
    },
    forgot: { 
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
    },
    continueSign: { 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
    },
    loginWith:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    logoGoogle: { 
        width: 40,
        height: 40,
        marginLeft: 10,
        marginTop: 5,
    },
    logoFacebook: { 
        width: 50,
        height: 50
    }
  });

  export default SignUp