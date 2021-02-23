import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';

const GameOverScreen = ({ totalGuesses, userGuess, onRestart }) => {
   return (
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
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageContainer: {
      width: 300,
      height: 300,
      borderRadius: 150,
      borderWidth: 3,
      borderColor: Colors.primary,
      overflow: 'hidden',
      marginVertical: 25
   },
   image: {
      width: '100%',
      height: '100%'
   },
   resultContainer: {
      marginVertical: 15,
      marginHorizontal: 30
   },
   resultText: {
      textAlign: 'center',
      fontSize: 20
   },
   highlightedText: {
      color: Colors.highlighted,
      fontFamily: 'open-sans-bold'
   }
});

export default GameOverScreen;