import React from 'react';
import { Image, ImageBackground, Text, View, StyleSheet } from 'react-native';

export default function SuggestedPersonCard() {
  return (
     <View style={styles.Container}>
     <ImageBackground source={{uri: 'https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2016/09/OskiRappels500.jpg'}} imageStyle={styles.ProfileImage}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', top: 182}}>
        <View style={styles.StatusView}><Text style={styles.StatusText}>Local</Text></View>
        <Image source={{uri: 'https://pbs.twimg.com/media/ET0Tyl-UUAACA-a?format=jpg'}} style={styles.FlagImage} />
      </View>
      </ImageBackground>
      <View style={{position:'absolute', bottom: 0}}><Text style={styles.NameText}>First Name</Text></View></View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: 172,
    height: 258,
  },
  ProfileImage: {
    width: 172,
    height: 225,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  FlagImage: {
    width: 33,
    height: 33,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'right',
    marginHorizontal: 12,
  },
  StatusView: {
    height: 22,
    width: 94,
    borderRadius: 5,
    backgroundColor: '#8F6FE0',
    marginHorizontal: 8,
  },
  StatusText: {   
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    padding: 3,
  },
  NameText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 5,
  }
});
