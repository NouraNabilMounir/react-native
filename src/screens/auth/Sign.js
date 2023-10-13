/* eslint-disable prettier/prettier */
import * as React from 'react';
import {TouchableOpacity,View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import styles from '../styles';


function Sign  ({navigation}) {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    const handleEmailChange = (text) => {
      setEmail(text);
      // Check if the input follows the email format using regex
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setIsValidEmail(emailPattern.test(text));
    };
    const handlePasswordChange = (text) => {
      setPassword(text);
      setPasswordsMatch(text === repeatPassword);
    };
    const handleRepeatPasswordChange = (text) => {
      setRepeatPassword(text);
      setPasswordsMatch(text === password);
    };
    // const handleButtonPress = () => {
    //   if (isValidEmail) {
    //     console.log('Valid email:', email);
    //   } else {
    //     console.log('Invalid email');
    //   }
    //   if (passwordsMatch) {
    //     // Passwords match, perform your action here
    //     console.log('Passwords match:', password);
    //   } else {
    //     console.log('Passwords do not match');
    //   }
    //   if (isValidEmail && passwordsMatch){
    //      navigation.navigate('Home');
    //   }
    // };
  return (
      <View style={styles.container}>
        <View style={styles.input}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputView}>
        <TextInput style={[styles.inputText, !isValidEmail && styles.invalidInput]} value={email} onChangeText={handleEmailChange} keyboardType="email-address" placeholder="e-mail"/>
        </View>
        <View>
        {!isValidEmail && <Text style={styles.errorText}>Invalid email format, Please Enter Your E-mail </Text>}
        </View>
        <View style={styles.inputView}>
        <TextInput style={[styles.inputText, !passwordsMatch && styles.invalidInput]} value={password} onChangeText={handlePasswordChange} secureTextEntry placeholder="password"/>
        </View>
        <View style={styles.inputView}>
        <TextInput style={[styles.inputText, !passwordsMatch && styles.invalidInput]} value={repeatPassword} onChangeText={handleRepeatPasswordChange} secureTextEntry placeholder="repeat password"/>
        </View>
        <View>
        {!passwordsMatch && <Text style={styles.errorText}>Passwords do not match, Please make sure password and repeat password are the same value</Text>}
        </View>
        </View>
        <View style={styles.input}>
          <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.textBtn}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.textRead}>Read User License Agreement</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default Sign;
