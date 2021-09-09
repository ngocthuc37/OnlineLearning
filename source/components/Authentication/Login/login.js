import React, {useContext, useEffect, useState} from 'react'
import {View, TextInput, Text, StyleSheet, Image, ImageBackground, TouchableOpacity} from 'react-native'




const Login = (props) => { 

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [hidePass, setHidePass] = useState(true);

    return (
        <ImageBackground source = {require('../../../assets/background.png')} style = {style.container}>
            <Image source = {require('../../../assets/logo.png')} style = {style.logo}>
            </Image>
            
        </ImageBackground>
    )

}