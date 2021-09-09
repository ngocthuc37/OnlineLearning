import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';

const Home = (props) => { 
    
    return <ScrollView>
        <SectionCourses title = 'Continue learning' />
        <SectionCourses title = 'Path' />
        <SectionCourses title = 'Channel' />
        <SectionCourses title = 'Bookmarks' />
    </ScrollView>
}
const styles = StyleSheet.create({

})

export default Home;