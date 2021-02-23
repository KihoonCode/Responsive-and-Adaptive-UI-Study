import React, { useState } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Button,
   TouchableWithoutFeedback,
   Keyboard,
   Alert,
   Dimensions
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

import Colors from '../constants/colors';

const StartGameScreen = props => {
   // current user's typing input 
   const [userInput, setUserInput] = useState("");

   // number user confirmed
   const [number, setNumber] = useState();

   // whether user's chosen input is valid
   const [confirmed, setConfirmed] = useState(false);

   /*
   * inputTracker keeps tracks of input that user is typing.
   */
   const inputTracker = input => {
      setUserInput(input.replace(/[^0-9]/g, ""));
   };

   /*
   * confirmInput confirms whether entered value is a reasonable number. 
   */
   const confirmInput = () => {
      let confirmedValue = parseInt(userInput);
      if (isNaN(confirmedValue) || confirmedValue <= 0 || confirmedValue > 99) {
         Alert.alert(
            "Invalid Number",
            "Number has to be a number between 1 and 99",
            [{ text: "Okay", style: "destructive", onPress: resetInput }]
         );
         return;
      }
      setConfirmed(true);
      setNumber(confirmedValue);
      setUserInput("");
      Keyboard.dismiss();
   }

   /*
   *  resetInput resets the input that user typed.
   */
   const resetInput = () => {
      setConfirmed(false);
      setUserInput('');
   }

   // confirmation screen that shows selected number.
   let confirmedOutput;

   if (confirmed) {
      confirmedOutput =
         <Card style={styles.confirmedOutput}>
            <Text>Your Chosen Number: </Text>
            <NumberContainer>{number}</NumberContainer>
            <MainButton onPress={() => props.startGame(number)}>
               START GAME
            </MainButton>
         </Card>
   }

   return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
         <View style={styles.screen}>
            <TitleText style={styles.title}>Start a New Game!</TitleText>
            <Card style={styles.inputContainer}>
               <BodyText>Select a number!</BodyText>
               <Input
                  style={styles.userInput}
                  blurOnSubmit
                  autoCapitalize='none'
                  autoCorrect={false}
                  keyboardType='number-pad'
                  maxLength={2}
                  onChangeText={inputTracker}
                  value={userInput} />
               <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                     <Button
                        title="RESET"
                        onPress={resetInput}
                        color={Colors.primary} />
                  </View>
                  <View style={styles.button}>
                     <Button
                        title="CONFIRM"
                        onPress={confirmInput}
                        color={Colors.primary} />
                  </View>
               </View>
            </Card>
            {confirmedOutput}
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
   },
   title: {
      fontSize: 20,
      marginVertical: 10
   },
   inputContainer: {
      width: '80%',
      maxWidth: '95%',
      minWidth: 300,
      alignItems: 'center',
      marginTop: 20
   },
   userInput: {
      padding: 3,
      fontSize: 20,
      width: '18%',
      textAlign: 'center'
   },
   buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20
   },
   button: {
      width: Dimensions.get('window').width / 4
   },
   confirmedOutput: {
      marginVertical: '7%',
      alignItems: 'center'
   }
});

export default StartGameScreen;