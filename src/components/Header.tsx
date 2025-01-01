import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';

// Define the types for the component props
type HeaderProps = {
  title: string;
  icon: ImageSourcePropType; // Type for the icon image
};

const Header: React.FC<HeaderProps> = ({ title, icon }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity 
        style={styles.backBtn}
        activeOpacity={0.7} // Add this to set the opacity on press
      >
        <Image source={icon} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, { marginLeft: 10 }]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  back: {
    width: 24,
    height: 24,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});
