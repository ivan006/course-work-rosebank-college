import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text>Welcome to my app...</Text>
      <Image
        source={require('./assets/icon.png')}
        style={{ width: 100, height: 100 }}
      />
      <Text>{name}</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button
        title="Say Hello"
        onPress={() => alert('Hello, ' + name)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
