import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => { 
    const course = [
        {
            id: 1, 
            title: 'React Native',
            author: 'Thuc Trieu',
            level: 'Advance',
            released: 'December 9, 2021', 
            duration: '40 hours'
        },
        {
            id: 2, 
            title: 'iOS',
            author: 'Thuc Trieu Dep Trai',
            level: 'Beginner',
            released: 'December 8, 2021', 
            duration: '30 hours'
        }
    ]

    const renderListItems = (courses) => {
        return course.map(item => <SectionCoursesItem item = {item} />)
    }

    return <View>
        <View>
            <Text>{props.title}</Text>
        </View>
        <ScrollView horizontal = {true}>
            {renderListItems()}
        </ScrollView>
    </View>
}


export default SectionCourses