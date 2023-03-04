import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';

const Popup = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [PopupTitle, setPopupTitle] = useState('Flag User');
  const [PopupBody, setPopupBody] = useState(
    'Flag this user for inappropriate content or messaging. The SWiiFT team will take any necessary action regarding violations of our Terms of Use.'
  ); // example

  const closePopup = () => {
    setPopupTitle('');
    setPopupBody('');
    setIsPopupVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={isPopupVisible}
        transparent={true}
        animationType="none"
        onRequestClose={closePopup}>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={1}
          onPressOut={closePopup}>
          <View
            style={{
              backgroundColor: '#2D2C2E',
              borderColor: '#BC7BBC',
              borderWidth: 8,
              borderRadius: 12,
              padding: 20,
              width: '80%',
              maxHeight: '80%',
              alignItems: 'center',
            }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', padding: 10}}>
              {PopupTitle}
            </Text>
            <Text style={{ textAlign: 'center', padding: 5 }}>{PopupBody}</Text>
            <TouchableOpacity onPress={closePopup} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Popup;