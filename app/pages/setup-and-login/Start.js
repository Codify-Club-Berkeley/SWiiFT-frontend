import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Start({navigation}) {
  const onNextPressNav = () => {
    navigation.navigate('Start')
  }
  const [text, onChangeText] = React.useState('Enter your first name');

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's start basic</Text>
      <Text style={styles.questions}>My first name is...</Text>
      <TextInput style={styles.input} 
        placeholder = "Enter your first name" 
        placeholderTextColor={"#A6A5A6"}
        onChangeText = {onChangeText}
      ></TextInput>
      <Text style={styles.questions}>My last name is...</Text>
      <TextInput style={styles.input} 
        placeholder = "Enter your last name" 
        placeholderTextColor={"#A6A5A6"}
        onChangeText = {onChangeText}
      ></TextInput>
      <Text style={styles.questions}>My age is...</Text>
      <TextInput style={styles.input} 
        placeholder = "Enter your age" 
        placeholderTextColor={"#A6A5A6"}
        onChangeText = {onChangeText}
      ></TextInput>
      <Text style={styles.questions}>I identify as...</Text>
      <Text style={styles.questions}>My country of origin is...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: "#2D2C2E",
  },
  title: {
    color: "white",
    fontSize: 30,
    alignSelf: "left",
    paddingLeft: 20,
  },
  questions: {
    color: "white",
    fontSize: 20,
    alignSelf: "left",
    paddingLeft: 20,
    padding: 10,
  },
  input: {
    height: 40,
    alignSelf: "left",
    paddingLeft: 20, 
    width: "90%",
    borderRadius: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "#4D4C4D",
  },
});