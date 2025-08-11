import React from 'react';
import { View, useWindowDimensions, Platform } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import QWrapper from './QWrapper';

const products = [
  { id: 1, title: 'Product A', description: 'This is product A' },
  { id: 2, title: 'Product B', description: 'This is product B' },
  { id: 3, title: 'Product C', description: 'This is product C' },
  { id: 4, title: 'Product D', description: 'This is product D' },
];

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width >= 768;

  return (
    <QWrapper
      title="Heading Here"
      subtitle="Subheading goes here"
      imageSource={require('./assets/icon.png')}   // add your hero image
    >
      {/* everything here becomes the page content under the hero */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: isDesktop ? 'space-between' : 'center',
          gap: 16,
        }}
      >
        {products.map((p) => (
          <Card key={p.id} style={{ width: isDesktop ? '48%' : '100%' }}>
            <Card.Title title={p.title} />
            <Card.Content>
              <Text>{p.description}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => navigation.navigate('Details')}>View</Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </QWrapper>
  );
}
