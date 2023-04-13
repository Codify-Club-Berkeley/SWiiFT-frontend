import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

export default function Start({navigation}) {
  const onNextPressNav = () => {
    navigation.navigate('Start')
  }
  const [text, onChangeText] = React.useState('Enter your first name');
  const [selected, setSelected] = React.useState("");
  const data1 = [
    {key:'1', value:'Select gender', disabled:true},
    {key:'2', value:'Male'},
    {key:'3', value:'Female'},
    {key:'4', value:'Nonbinary'},
  ]
  const data2 = [
    {key:'1', value:'Country', disabled:true},
    {key:'2', value:'United States'},
    {key:'3', value:'Italy'},
    {key:'4', value:'China'},
  ]

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
      <SelectList
        setSelected={setSelected}
        data={data1}  
        search={false} 
        boxStyles={{borderWidth:0, borderRadius:30, width:"65%", backgroundColor:"#4D4C4D"}}
        defaultOption={{ key:'1', value:'Select gender' }}
        placeholderTextColor="white"
      />
      <Text style={styles.questions}>My country of origin is...</Text>
      <SelectList
        setSelected={setSelected}
        data={data2}  
        search={false} 
        boxStyles={{borderWidth:0, borderRadius:30, width:"60%", backgroundColor:"#4D4C4D"}}
        defaultOption={{ key:'1', value:'Country' }}
        placeholderTextColor="white"
      />
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
    padding: 30,
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