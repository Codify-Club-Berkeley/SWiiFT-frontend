import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import OvalButton from './buttons/OvalButton'
import PhotoPicker from './PhotoPicker';

interface Props {
  title: string;
  imageType: string;
  buttonText: string;
  buttonColor: string;
  buttonWide?: boolean;
  buttonTextUppercase?: boolean;
  buttonDisabled?: boolean;
  onPress: () => void;
}

const Page: React.FC<Props> = ({ title, imageType, buttonText, buttonColor, buttonWide, buttonTextUppercase, buttonDisabled, onPress }) => {
  const [photo, setPhoto] = React.useState(null);

  const handlePhoto = (imageUri) => {
    setPhoto(imageUri);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.pickerContainer}>
        <PhotoPicker getPhoto={handlePhoto} type={imageType} />
      </View>
      <View style={styles.buttonContainer}>
        <OvalButton label={buttonText} color={buttonColor} wide={buttonWide} uppercase={buttonTextUppercase} disabled={buttonDisabled}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D2C2E',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    top: 20,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  placeholder: {
    width: 48,
  },
  pickerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 150,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});

export default Page;