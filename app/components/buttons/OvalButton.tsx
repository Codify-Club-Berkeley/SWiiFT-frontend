import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';

interface Props {
  onPress: () => void;
  label: string;
  defaultSize?: boolean;
  transparent?: boolean;
  uppercase?: boolean;
  disabled?: boolean;
}

const { width } = Dimensions.get('window');

const OvalButton = ({ onPress, label, defaultSize=true, transparent=false, uppercase=true, disabled=false }: Props) => {
  const backgroundColor = transparent ? 'transparent' : '#9B6EB7';
  const size = defaultSize ? styles.defaultSize : { width: width * 0.8 };
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
