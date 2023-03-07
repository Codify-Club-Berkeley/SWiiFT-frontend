import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import SingleMessage from "./messageComponents/SingleMessage";
// import MessageDisplay from "./messageComponents/MessageDisplay";

// Example of Message Data Array
const messageData = [
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/denero.jpg", username: "John Denero", 
  displayMessage: "What's up william", timestamp: "11:30 AM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/rao.jpg", username: "Satish Rao", 
  displayMessage: "What's up william part 2", timestamp: "10:00 PM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/denero.jpg", username: "John Denero", 
  displayMessage: "What's up william", timestamp: "11:30 AM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/rao.jpg", username: "Satish Rao", 
  displayMessage: "What's up william part 2", timestamp: "10:00 PM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/denero.jpg", username: "John Denero", 
  displayMessage: "What's up william", timestamp: "11:30 AM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/rao.jpg", username: "Satish Rao", 
  displayMessage: "What's up william part 2", timestamp: "10:00 PM"}
]

// Example of Request Data Array
const requestData = [
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/joshhug.jpg", username: "Josh Hug", 
  displayMessage: "Would like to talk to you", timestamp: "11:30 AM"},
  { avatar: "https://www2.eecs.berkeley.edu/Faculty/Photos/Homepages/garcia.jpg", username: "Dan Garcia", 
  displayMessage: "Would like to talk to you", timestamp: "10:00 PM"}
]

export default function Messages() {
  // Button State
  const [isMessages, setIsMessages] = useState(true);
  
  return (    
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar style="auto" />

      <View style={[styles.headerContainer]}>
        <View style={[{flex:1}, styles.titleContainer]}>
          <Text style={styles.pageTitleText}>Chats</Text>
        </View>

        <View style={{flex:1}}>
          <Text>SEARCH BAR</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Messages" onPress={() => {
            setIsMessages(true);
          }}/>
          <Button title="Requests" onPress={() => {
            setIsMessages(false);
          }}/>
        </View>
      </View>

      <View style={styles.contentContainer}>
        { isMessages ? <MessageDisplay data={messageData}/> : <MessageDisplay data={requestData}/>}
      </View>
    </View>
  );
}

function MessageDisplay(props: { data: any[]; }) {
  return (
    <ScrollView>
      {props.data.map((data) => {
        return <SingleMessage avatar={data.avatar} username={data.username} displayMessage={data.displayMessage} timestamp={data.timestamp}/>
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2C2E",
    alignItems: "center",
    justifyContent: "center",
  },

  contentContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  headerContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  pageTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});
