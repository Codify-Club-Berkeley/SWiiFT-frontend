import { ScrollView } from "react-native";
import SingleMessage from "./SingleMessage";
import { StyleSheet } from "react-native";

export default function MessageDisplay(props: { data: any[]; }) {
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
    backgroundColor: "#2D2C2E",
  },

  arrowText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    color: "grey",
    textAlign: "right",
    letterSpacing: .055,
  },
});