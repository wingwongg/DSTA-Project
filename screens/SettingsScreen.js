import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function SettingsScreen(){ 
    return(
    <View style={styles2.container}>
        <TouchableOpacity style={styles2.button} >
            <Text style={styles2.text}>
                Profile
             </Text>
        </TouchableOpacity>
    </View>
)}

const styles2 = StyleSheet.create({
    container:{
        padding: 20,
        borderTop: 2,
        borderBottom: 2,
        borderColor:'grey',
        backgroundColor: 'white'
    },
    text:{
        
    },
    button:{

    },
})