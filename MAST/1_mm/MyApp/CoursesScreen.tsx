// CoursesScreen.tsx
import React, { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';
import { List, Text } from 'react-native-paper';
import QWrapper from './QWrapper';

const courses = [
  { id: 'c1', title: 'Intro to UX', summary: 'Basics of UX thinking' },
  { id: 'c2', title: 'Design Systems 101', summary: 'Foundations of design systems' },
  { id: 'c3', title: 'Accessibility Essentials', summary: 'Build inclusive products' },
];

export default function CoursesScreen({ navigation }: { navigation: any }) {
  // Set breadcrumbs for this screen
  useLayoutEffect(() => {
    navigation.setOptions({
      // @ts-ignore
      params: {
        breadcrumbs: [
          { label: 'Home', to: { name: 'Home' } },
          { label: 'Courses' }, // current page (no target)
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
      <View>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.summary}
              onPress={() =>
                navigation.navigate('CourseDetails', {
                  courseId: item.id,
                  title: item.title,
                  // Provide full multi-level breadcrumbs for the detail page
                  breadcrumbs: [
                    { label: 'Home', to: { name: 'Home' } },
                    { label: 'Courses', to: { name: 'Courses' } },
                    { label: item.title },
                  ],
                })
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListHeaderComponent={<Text variant="bodyMedium">Tap a course to view details.</Text>}
        />
      </View>
      
    </QWrapper>
  );
}
