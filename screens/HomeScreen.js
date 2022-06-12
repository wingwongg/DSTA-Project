import React from 'react';
import { TouchableOpacity, Text, View, Flatlist, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeScreen({ navigation }) {

    return( 
        <View style={styles1.container}>
      <FontAwesome5 name="cloud-sun" size={30} color="black" />
      <Text style= {styles1.text}>Weather</Text>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 70
  },
  text: {
    fontSize: 35
  }
})
