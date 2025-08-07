import React from 'react';
import { View, useWindowDimensions, Platform } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const products = [
  { id: 1, title: 'Product A', description: 'This is product A' },
  { id: 2, title: 'Product B', description: 'This is product B' },
  { id: 3, title: 'Product C', description: 'This is product C' },
  { id: 4, title: 'Product D', description: 'This is product D' },
];

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width > 768;

  return (
    <View style={{ padding: 20 }}>
      <Text variant="titleLarge">Welcome!</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: isDesktop ? 'space-between' : 'center',
          marginTop: 24,
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            style={{
              width: isDesktop ? '48%' : '100%',
              marginBottom: 16,
            }}
          >
            <Card.Title title={product.title} />
            <Card.Content>
              <Text>{product.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button>View</Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </View>
  );
}
