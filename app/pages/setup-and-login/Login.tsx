import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

/**
 * Fix for "navigation implicitly has type any"
 * https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
 * https://reactnavigation.org/docs/typescript/
 */

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title="Go to Tabs" onPress={() => navigation.navigate("Tab")} />
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
});
