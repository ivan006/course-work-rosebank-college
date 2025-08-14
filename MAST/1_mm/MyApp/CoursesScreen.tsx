// CoursesScreen.tsx
import React, { useLayoutEffect } from 'react';
import { View, useWindowDimensions, Platform } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import QWrapper from './QWrapper';

const courses = [
  { id: 'c1', title: 'Intro to UX', summary: 'Basics of UX thinking' },
  { id: 'c2', title: 'Design Systems 101', summary: 'Foundations of design systems' },
  { id: 'c3', title: 'Accessibility Essentials', summary: 'Build inclusive products' },
  { id: 'c4', title: 'Prototyping Fast', summary: 'Low/hi‑fi prototyping workflow' },
];

export default function CoursesScreen({ navigation }: { navigation: any }) {
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width >= 768;

  // Set breadcrumb: Home > Courses
  useLayoutEffect(() => {
    navigation.setOptions({
      // @ts-ignore
      params: {
        breadcrumbs: [
          { label: 'Home', to: { name: 'Home' } },
          { label: 'Courses' },
        ],
      },
    });
  }, [navigation]);

  return (
    <QWrapper 
        title="Courses" 
        subtitle="Browse our catalog"
        imageSource={require('./assets/icon.png')} 
    >
      {/* Grid like your products layout */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: isDesktop ? 'space-between' : 'center',
          gap: 16,
          marginTop: 16,
        }}
      >
        {courses.map((c) => (
          <Card key={c.id} style={{ width: isDesktop ? '48%' : '100%' }}>
            <Card.Title title={c.title} />
            <Card.Content>
              <Text>{c.summary}</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() =>
                  navigation.navigate('CourseDetails', {
                    courseId: c.id,
                    title: c.title,
                    breadcrumbs: [
                      { label: 'Home', to: { name: 'Home' } },
                      { label: 'Courses', to: { name: 'Courses' } },
                      { label: c.title },
                    ],
                  })
                }
              >
                View
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </QWrapper>
  );
}
