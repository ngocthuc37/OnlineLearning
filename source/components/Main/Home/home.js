import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button'

const Home = (props) => { 
    const onPressNewRelease = () => {
        console.log('Press new release');
    }

    return <ScrollView>
        <ImageButton title = 'NEW RELEASE' onPress ={onPressNewRelease}/>
        <SectionCourses title = 'Continue learning' />
        <SectionCourses title = 'Path' />
        <SectionCourses title = 'Channel' />
        <SectionCourses title = 'Bookmarks' />
    </ScrollView>
}
const styles = StyleSheet.create({

})

export default Home;