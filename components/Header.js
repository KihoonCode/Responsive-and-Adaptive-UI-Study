import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Colors from '../constants/colors';


const Header = props => {
   return (
      <View style={styles.header}>
         <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: 90,
      backgroundColor: Colors.primary,
      paddingTop: 36,
      justifyContent: 'center',
      alignItems: 'center'
   },

   headerTitle: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'open-sans-bold'
   }
});

export default Header;