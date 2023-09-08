/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <View>
    <Text>{item.text}</Text>
  </View>
);

const Home = ({ navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
    <Text>Sign-In Screen</Text>
    <Button title="Sign" onPress={handleSignIn} />
    <FlatList
    />
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.key}
  </View>
  )
}

export default Home;

