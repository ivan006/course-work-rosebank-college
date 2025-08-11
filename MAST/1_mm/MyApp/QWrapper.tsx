import React, { ReactNode } from 'react';
import { ImageBackground, Platform, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';

type QWrapperProps = {
  title: string;
  subtitle?: string;
  imageSource?: any;          // require('./assets/hero.jpg') or { uri: '...' }
  children: ReactNode;
  heroHeight?: number;        // optional override (px)
};

export default function QWrapper({
  title,
  subtitle,
  imageSource,
  children,
  heroHeight,
}: QWrapperProps) {
  const { width } = useWindowDimensions();
  const isDesktop = Platform.OS === 'web' && width >= 768;

  // sensible default hero heights
  const height = heroHeight ?? (isDesktop ? 260 : 180);

  const HeroContent = (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: 'rgba(255,255,255,0.9)',
          borderRadius: 6,
        }}
      >
        <Text variant={isDesktop ? 'headlineSmall' : 'titleMedium'} style={{ fontWeight: '700' }}>
          {title}
        </Text>
      </View>

      {subtitle ? (
        <View
          style={{
            alignSelf: 'flex-start',
            marginTop: 8,
            marginLeft: 20,
            paddingVertical: 4,
            paddingHorizontal: 10,
            backgroundColor: 'rgba(255,255,255,0.85)',
            borderRadius: 6,
          }}
        >
          <Text variant="bodyMedium">{subtitle}</Text>
        </View>
      ) : null}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {/* HERO */}
      {imageSource ? (
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={{ width: '100%', height }}
          imageStyle={{}}
        >
          {/* subtle dark overlay for readability */}
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.15)' }}>
            {HeroContent}
          </View>
        </ImageBackground>
      ) : (
        <View style={{ width: '100%', height, backgroundColor: '#eee' }}>{HeroContent}</View>
      )}

      {/* PAGE BODY */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 24 }}>{children}</View>
    </View>
  );
}
