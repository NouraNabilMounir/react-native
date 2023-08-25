/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { View, Text, Image} from 'react-native';
import axiosClient from '../../api/axiosClient';
import styles from '../styles';

const SignIn = () => {
  const [userData, setUserData] = useState(null);
  const getUser = async () => {
    try {
      const response = await axiosClient.get('/users/1');
      setUserData(response);
    } catch (error){
      console.error('Error Fetching user data:', error);
    }
  };
useEffect(() => {
  getUser();
}, []);
  return (
    <View style={styles.container2}>
      {userData ? (
        <View>
          <Image source={{uri: userData.avatar_url}} style={styles.img}/>
          <Text style={styles.text}>{userData.name}</Text>
          <Text style={styles.text}>{userData.location}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
        )
      }
    </View>
  );
};

export default SignIn;
