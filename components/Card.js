import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
   return (
      <View style={{ ...styles.card, ...props.style }}>
         {props.children}
      </View>
   );
};

const styles = StyleSheet.create({
   card: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.28,
      elevation: 8,
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      padding: 20
   }

});

export default Card;