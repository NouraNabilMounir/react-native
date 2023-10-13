/* eslint-disable prettier/prettier */
// components/Card.js
import React from 'react';
import { Text, Image ,Button, View} from 'react-native';
import { Card} from 'react-native-elements';
import styles from '../screens/styles';
const CustomCard = ({ imageUrl, title = " "}) => {
  return (
    <Card>
     <View style={styles.cardView}>
     <Image
        source={{ uri: imageUrl }}
        style={styles.imageCard}
      />
      <Text style={styles.textCard}>{title}</Text>
     </View>
      <Button title='add' style={styles.buttonCard}/>
    </Card>
  );
};

export default CustomCard;
