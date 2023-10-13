/* eslint-disable prettier/prettier */
import * as React from 'react';
import { FlatList, View, Text , Button, Image} from 'react-native';
import CustomCard from '../utilities/CustomCard';


const data = [
  {
    id: '1',
    imageUrl: 'https://reactnative.dev/docs/assets/p_cat1.png',
  },
  {
    id: '2',
    imageUrl: 'https://reactnative.dev/docs/assets/p_cat1.png',

  },
  {
    id: '3',
    imageUrl: 'https://reactnative.dev/docs/assets/p_cat1.png',
  },
];
const data2 = [
  {
    id: '1',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
    title: 'Card 1',
  },
  {
    id: '2',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
    title: 'Card 2',
  },
  {
    id: '3',
    imageUrl: 'https://legacy.reactjs.org/logo-og.png',
    title: 'Card 3',
  },
];




function Home ({ navigation }) {
  return (
    <View>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CustomCard imageUrl={item.imageUrl} />
      )}
      horizontal={true}
    />
    <FlatList
      data={data2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CustomCard imageUrl={item.imageUrl} title={item.title} />
      )}
    />
  </View>
  );
}

export default Home;

