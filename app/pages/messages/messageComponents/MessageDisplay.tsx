import { ScrollView } from "react-native";
import SingleMessage from "./SingleMessage";

export default function MessageDisplay(props: { data: any[]; }) {
  return (
    <ScrollView>
      {props.data.map((data) => {
        return <SingleMessage avatar={data.avatar} username={data.username} displayMessage={data.displayMessage} timestamp={data.timestamp}/>
      })}
    </ScrollView>
  );
}