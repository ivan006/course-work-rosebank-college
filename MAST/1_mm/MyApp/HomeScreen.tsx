

import React from 'react';
import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {

  
  return (
    <View>
      <Text>This is Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text>Welcome to my app...</Text>
    </View>
  );
}



