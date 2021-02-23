import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = ({ totalGuesses, userGuess, onRestart }) => {
   return (
      <ScrollView>
         <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
               <Image
                  source={require('../assets/success.png')}
                  style={styles.image}
               />
            </View>
            <View style={styles.resultContainer}>
               <BodyText style={styles.resultText}>
                  Your Phone took <Text />
                  <Text style={styles.highlightedText}>{totalGuesses}</Text>
                  <Text /> round(s) to guess the number <Text />
                  <Text style={styles.highlightedText}>{userGuess}</Text>
               </BodyText>
            </View>
            <MainButton onPress={onRestart}>Restart</MainButton>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      width: Dimensions.get('window').width * 0.7,
      height: Dimensions.get('window').width * 0.7,
      borderRadius: Dimensions.get('window').width * 0.7 / 2,
      borderWidth: 3,
      borderColor: Colors.primary,
      overflow: 'hidden',
      marginVertical: Dimensions.get('window').height / 30
   },
   image: {
      width: '100%',
      height: '100%'
   },
   resultContainer: {
      marginVertical: Dimensions.get('window').height / 60,
      marginHorizontal: 30
   },
   resultText: {
      textAlign: 'center',
      fontSize: Dimensions.get('window').height < 400 ? 16 : 20
   },
   highlightedText: {
      color: Colors.highlighted,
      fontFamily: 'open-sans-bold'
   }
});

export default GameOverScreen;