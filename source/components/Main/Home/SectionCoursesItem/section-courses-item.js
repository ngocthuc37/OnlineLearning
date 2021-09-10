import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const SectionCoursesItem = (props) => { 
    
    return <View style ={styles.item}>
        <Image source = {require('../../../../../assets/c.png')} style = {styles.image} />
        <View style = {{marginTop: 5, marginLeft: 5}}>
            <Text>{props.item.title}</Text>
            <Text style ={styles.darkText} > {props.item.author}</Text>
            <Text style ={styles.darkText} > {`${props.item.level}. ${props.item.released} . ${props.item.duration}`}</Text>
        </View>
    </View>
}
const styles = StyleSheet.create({
    item: { 
        margin: 5, 
        width: 200, 
        height: 200,
        backgroundColor: 'lightgrey',
    },
    image: {
        width: '100%' ,
        height: 100,
    },
    darkText: { 
        color: '#747b87',
    }
})

export default SectionCoursesItem