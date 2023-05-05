import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
  color: string;
  wide?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
}

const { width } = Dimensions.get('window');

const OvalButton = ({ onPress, label, wide=false, color, uppercase=true, disabled=false }: Props) => {
  const backgroundColor = color;
  const size = wide ? { width: width * 0.8 } : styles.defaultSize;
  const textTransform = uppercase ? 'uppercase' : 'none';

  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={[styles.button, size, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.label, { textTransform }]}>{label}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 3,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  defaultSize: {
    width: 150,
    height: 55,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OvalButton;
