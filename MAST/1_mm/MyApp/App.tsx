import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

function BreadcrumbHeader({ route, navigation }: any) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/icon.png')}
        style={{ width: 36, height: 36, resizeMode: 'contain', marginRight: 8 }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Home</Text>
        </Pressable>
        {route.name !== 'Home' && (
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}> {' › '} {route.name}</Text>
        )}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route, navigation }) => ({
            headerTitle: () => (
              <BreadcrumbHeader route={route} navigation={navigation} />
            ),
            headerLeft: () => null, // ✅ completely remove default back arrow
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
