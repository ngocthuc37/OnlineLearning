import React from 'react';
import {View, FlatList, TextInput, Button} from 'react-native';
import ListCoursesItems from '../ListCoursesItems/list-courses-items'


const ListCourses = (props) => { 
    const courses = [
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
    },
    {
        id: 3, 
        title: 'android',
        author: 'Thuc Trieu Dep Trai',
        level: 'Beginner',
        released: 'December 8, 2021',   
        duration: '30 hours'
    }
    ]

    const searchView = () => { 
        return <View style = {{flexDirection: 'row'}}>
            <TextInput style={{flex: 1, borderWidth: 1, borderColor: 'grey', textAlign: 'center'}} placeholder="Search text" />
            <Button onPress ={()=> {
                console.log('Search')
            }} title = 'Search' style ={{width: 60, height: 40}}/>
        </View>
    }
    return <View>
        <FlatList
            data = {courses}
            renderItem = {({item}) => <ListCoursesItems item={item} />}
            ListHeaderComponent={()=> searchView()}
            />
    </View>

}

export default ListCourses