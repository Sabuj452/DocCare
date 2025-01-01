import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


type CommonBtnProps = {
  w: number; 
  h: number; 
  txt: string; 
  onClick: () => void; 
  status: boolean; 
};

const CommonBtn: React.FC<CommonBtnProps> = ({ w, h, txt, onClick, status }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.touchableContainer}
    >
      {status ? (
        <LinearGradient
          colors={['#009FFD', '#2A2A72']}
          style={[styles.gradient, { width: w, height: h }]}
        >
          <Text style={styles.text}>{txt}</Text>
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={['#8e8e8e', '#8e8e8e']}
          style={[styles.gradient, { width: w, height: h, opacity: 0.5 }]}
        >
          <Text style={styles.text}>{txt}</Text>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  touchableContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CommonBtn;
