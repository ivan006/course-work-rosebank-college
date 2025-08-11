import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider as PaperProvider, Text, TextInput, Button, Avatar, Card } from 'react-native-paper';

export default function App() {
  const [name, setName] = useState('');

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
          <Card mode="elevated" style={{ padding: 16 }}>
            <View style={{ alignItems: 'center', gap: 12 }}>
              <Avatar.Image size={84} source={require('./assets/icon.png')} />
              <Text variant="headlineSmall">Hello</Text>
              <Text>Welcome to my app…</Text>

              <Text variant="titleSmall">{name ? `You typed: ${name}` : ''}</Text>

              <TextInput
                mode="outlined"
                label="Enter your name"
                value={name}
                onChangeText={setName}
                style={{ width: '100%' }}
              />

              <Button mode="contained" onPress={() => alert(`Hello, ${name || 'there'}`)}>
                Say Hello
              </Button>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}
