// CourseDetailsScreen.tsx
import React, { useLayoutEffect, useMemo } from 'react';
import { View } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import QWrapper from './QWrapper';

const allCourses = [
  { id: 'c1', title: 'Intro to UX', content: 'Long-form course description for UX.' },
  { id: 'c2', title: 'Design Systems 101', content: 'Deep dive into design systems.' },
  { id: 'c3', title: 'Accessibility Essentials', content: 'Make products accessible.' },
];

export default function CourseDetailsScreen({ route, navigation }: { route: any; navigation: any }) {
  const { courseId, title } = route.params ?? {};

  const course = useMemo(
    () => allCourses.find((c) => c.id === courseId) ?? { title, content: 'Course not found.' },
    [courseId, title]
  );

  // Let the detail page fully define the breadcrumb trail (can be 2, 3, or more levels)
  useLayoutEffect(() => {
    const breadcrumbs =
      route.params?.breadcrumbs ??
      [
        { label: 'Home', to: { name: 'Home' } },
        { label: 'Courses', to: { name: 'Courses' } },
        { label: course.title },
      ];

    navigation.setOptions({
      // @ts-ignore
      params: { breadcrumbs },
    });
  }, [navigation, route.params, course.title]);

  return (
    <QWrapper 
        title={course.title} 
        subtitle="Course details"
        imageSource={require('./assets/icon.png')} 
    >
      <Card>
        <Card.Content>
          <Text variant="bodyLarge">{course.content}</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Courses')}>Back to Courses</Button>
        </Card.Actions>
      </Card>
      
    </QWrapper>
  );
}
