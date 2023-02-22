import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default function SuggestedPersonCard() {
  return (
    <View style={styles.Container}>
     <Image source={{uri: 'https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2016/09/OskiRappels500.jpg'}} style={styles.ProfileImage} />
     <View style={styles.StatusView}>
     <Text style={styles.StatusText}>Local</Text>
     </View>
      <Image source={{uri: 'https://cdn.britannica.com/46/7046-004-BB1F8E32/state-flag-Bear-Flag-California-red-star-July-9-1846.jpg'}} style={styles.FlagImage} />
      <Text style={styles.NameText}>First Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: 200,
    height: 296,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  ProfileImage: {
    width: 172,
    height: 225,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  FlagImage: {
    height: 33,
    width: 33,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'white',
    top: -65,
    left: 130,
  },
  StatusView: {
    height: 22,
    width: 94,
    borderRadius: 5,
    backgroundColor: '#8F6FE0',
    top: -35,
    left: 10,
  },
  StatusText: {
    color: 'white',
    fontStyle: 'normal',
    fontSize: 12,
    display: 'flex',
    letterSpacing: 0.055,
    padding: 3,
    textAlign: 'center',
  },
  NameText: {
    color: 'white',
    fontStyle: 'normal',
    fontSize: 20,
    letterSpacing: 0.055,
    top: -50,
  }
});
