import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Color from '../constants/colors';

const NumberContainer = props => {
   return (
      <View style={styles.container}>
         <Text style={styles.number}>{props.children}</Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginVertical: '8%',
      borderWidth: 1,
      borderColor: Color.primary,
      borderRadius: 3,
      padding: '3%'
   },

   number: {
      fontSize: 18,
      textAlign: 'center'
   }
});

export default NumberContainer ;