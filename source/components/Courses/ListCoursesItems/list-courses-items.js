import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


const ListCoursesItems = (props) => { 
    return <TouchableOpacity style = {styles.item}
                            onPress={() => {
                                console.log('Press')
                            }}
            >
        <Image style={styles.image} source ={require('../../../../assets/c.png')} /> 
        <View style = {{marginTop: 5}}>
            <Text>{props.item.title}</Text>
            <Text style ={styles.darkText} > {props.item.author}</Text>
            <Text style ={styles.darkText} > {`${props.item.level}. ${props.item.released} . ${props.item.duration}`}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    item: { 
        flexDirection: 'row',
        margin: 5,
        borderBottomColor: '#747b87',
        borderBottomWidth: 1 ,
    },
    image: {
        width: 100,
        height: 50,
    },
    darkText: { 
        color: '#747b87',
    }
})

export default ListCoursesItems