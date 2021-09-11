import React from 'react';
import {View, FlatList, TextInput, Button, SectionList, Text} from 'react-native';
import ListCoursesItems from '../ListCoursesItems/list-courses-items'


const ListCourses = (props) => { 
    const courses = [
    {
        title: 'Mobile', 
        data: [
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
    },
    {
        title: 'Web',
        data: [
            {
                id: 1, 
                title: 'ASP.net',
                author: 'Thuc Trieu',
                level: 'Advance',
                released: 'December 9, 2021', 
                duration: '40 hours'
            },
            {
                id: 2, 
                title: 'React',
                author: 'Thuc Trieu Dep Trai',
                level: 'Beginner',
                released: 'December 8, 2021', 
                duration: '30 hours'
            },
            {
                id: 3, 
                title: 'PHP',
                author: 'Thuc Trieu Dep Trai',
                level: 'Beginner',
                released: 'December 8, 2021',   
                duration: '30 hours'
            }
        ]
    },
    {
        title: 'Scrath',
        data: [
            {
                id: 1, 
                title: 'SB',
                author: 'Thuc Trieu',
                level: 'Advance',
                released: 'December 9, 2021', 
                duration: '40 hours'
            },
            {
                id: 2, 
                title: 'SA',
                author: 'Thuc Trieu Dep Trai',
                level: 'Beginner',
                released: 'December 8, 2021', 
                duration: '30 hours'
            },
            {
                id: 3, 
                title: 'SD',
                author: 'Thuc Trieu Dep Trai',
                level: 'Beginner',
                released: 'December 8, 2021',   
                duration: '30 hours'
            }
        ]
    },
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
       
        <SectionList
            sections = {courses}
            renderItem = {({item}) => <ListCoursesItems item={item} />}
            renderSectionHeader = {({section: {title}}) => (<View style ={{backgroundColor: 'white'}}>
                                                                <Text style ={{backgroundColor: 'white', fontSize: 24}}>{title}</Text> 
                                                            </View>)
                                    }
            ListHeaderComponent={()=> searchView()}
        />
    </View>

}

export default ListCourses