import React from 'react';
import {  View,  Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';



const SplashScreen = () => {

    return (
      <View style={styles.container}>
          <View style ={styles.header}>
              <Image 
                source={require('../../../assets/logo.png')}
                style = {styles.logo}
                resizeMode = "stretch"
                />
          </View>
          <View style = {styles.footer}>
            <Text style = {styles.title}>Learn everything with us!</Text>
            <Text style = {styles.text}>Sign in with account</Text>
            <View style = {styles.button}>
                <TouchableOpacity onPress ={() => alert('Click')}>
                    <LinearGradient 
                         colors = {['#08d4c4', '#01ab9d']}
                         style = {styles.signIn}
                    >
                        <Text style = {styles.textSign}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
          </View>
      </View>
    );
};



const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: 500,
      height: 500
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      fontSize: 20,
      color: 'grey',
      marginTop:5
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});


export default SplashScreen