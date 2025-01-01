import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';


const CallAmb: React.FC = () => {
 
  const handleCallAmbulance = () => {
    console.log('Calling ambulance...');
    
  };

  return (
    <View style={styles.container}>
      <Header icon={require('../images/back.png')} title={'Call Ambulance'} />
      <TextInput placeholder="Address" style={styles.address} />
      <CommonBtn w={200} h={50} txt={'Call Now'} status={true} onClick={handleCallAmbulance} />
    </View>
  );
};

export default CallAmb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});
