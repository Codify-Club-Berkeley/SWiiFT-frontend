import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

const MoreInfoButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Image source={require('../../assets/moreinfo-vector.png')} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
    borderRadius: 25,
    backgroundColor: '#BC7BBC',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MoreInfoButton;