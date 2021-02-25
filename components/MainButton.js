import React from 'react';
import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   TouchableNativeFeedback,
   Platform
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
   let CustomTouchable = TouchableOpacity;

   if (Platform.OS === 'android' && Platform.Version >= 21) {
      CustomTouchable = TouchableNativeFeedback;
   }

   return (
      <CustomTouchable activeOpacity={0.6} onPress={props.onPress}>
         <View style={styles.button}>
            <Text style={styles.buttonText}>
               {props.children}
            </Text>
         </View>
      </CustomTouchable>
   );
};

const styles = StyleSheet.create({
   button: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 30,
   },
   buttonText: {
      fontFamily: 'open-sans',
      fontSize: 16,
      color: '#FFFFFF'
   }
});

export default MainButton;