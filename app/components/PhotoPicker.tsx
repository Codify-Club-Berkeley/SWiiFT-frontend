import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface Props {
  getPhoto: (uri: string) => void;
  type: 'circle' | 'square' | 'wide';
}

export default function PhotoPicker({ getPhoto, type }: Props) {
  const imageSource =
    type === 'circle'
      ? require(`../assets/images/icons/uploadPhoto-circle.png`)
      : type === 'square'
      ? require(`../assets/images/icons/uploadPhoto-square.png`)
      : type === 'wide' 
      ? require(`../assets/images/icons/uploadPhoto-wide.png`)
      : require(`../assets/images/icons/uploadPhoto-circle.png`);

  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('This feature requires camera roll access');
        }
      }
    })();
  }, []);

  const selectPhoto = async () => {
    let selectedPhoto = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (selectedPhoto.canceled === false) {
      setImageUri(selectedPhoto.uri);
      getPhoto(selectedPhoto.uri);
    }
  };

  return (
    <TouchableOpacity onPress={selectPhoto}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: type === 'wide' ? Dimensions.get('window').width: 200,
            height: 200,
            borderRadius: type === 'circle' ? 200/2: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ) : (
        <Image
          source={imageSource}
          style={{
            width: type === 'wide' ? Dimensions.get('window').width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
    </TouchableOpacity>
  );
}
