import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/cover-pic.png')} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    width: 428,
    height: 342,
    left: 0,
    top: 0
  },
});
