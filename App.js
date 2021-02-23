import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
   return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
   });
}

export default function App() {
   // user's final guess
   const [userGuess, setUserGuess] = useState();
   // number of guesses taken to get user's number
   const [numGuess, setNumGuess] = useState(0);
   // Whether all data is loaded for app to function
   const [isDataLoaded, setIsDataLoaded] = useState(false);

   if (!isDataLoaded) {
      return <AppLoading
         startAsync={fetchFonts}
         onFinish={() => setIsDataLoaded(true)}
         onError={err => console.log(err)}
      />
   }

   /**
    * Starts the game with the final guess.
    */
   const startGame = guess => {
      setUserGuess(guess);
   };

   /**
    * Finishes the game. 
    */
   const endGame = totalGuess => {
      setNumGuess(totalGuess);
   }

   /**
    * Restarts the game.
    */
   const restartGame = () => {
      setUserGuess();
      setNumGuess(0);
   }

   // current screen
   let currScreen = <StartGameScreen startGame={startGame} />

   if (userGuess && numGuess <= 0) {
      currScreen = <GameScreen userGuess={userGuess} endGame={endGame} />;
   } else if (numGuess > 0) {
      currScreen = <GameOverScreen
         totalGuesses={numGuess}
         userGuess={userGuess}
         onRestart={restartGame} />;
   }

   return (
      <View style={styles.screen}>
         <Header title='Guess a number' />
         {currScreen}
      </View>
   );
}

const styles = StyleSheet.create({
   screen: {
      flex: 1
   }
});
