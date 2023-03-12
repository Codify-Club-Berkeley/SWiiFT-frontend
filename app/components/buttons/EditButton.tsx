import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Inter_500Medium } from '@expo-google-fonts/inter';

const EditButton = ({}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Edit ❯</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    //marginTop:"1.5%",
    flex: 1,
    //backgroundColor: "red",
    textAlign: "right",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Inter_500Medium",
    color: "grey",
    textAlign: "right",
    letterSpacing: .055,
  },
});

export default EditButton;