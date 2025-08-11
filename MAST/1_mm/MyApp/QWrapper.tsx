import React, { ReactNode } from 'react';
import { ImageBackground, Platform, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';

type QWrapperProps = {
  title: string;
  subtitle?: string;
  imageSource?: any;
  children: ReactNode;
  heroHeight?: number;
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

  const height = heroHeight ?? (isDesktop ? 260 : 180);

  const HeroContent = (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end', // ✅ Push text to bottom
        paddingHorizontal: 20,
        paddingBottom: 20, // space from bottom edge
      }}
    >
      <Text
        variant={isDesktop ? 'headlineMedium' : 'titleLarge'}
        style={{ fontWeight: '700', color: 'white' }}
      >
        {title}
      </Text>
      {subtitle ? (
        <Text
          variant="titleSmall"
          style={{ color: 'white', marginTop: 4 }}
        >
          {subtitle}
        </Text>
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
        >
          {/* Dark overlay for contrast */}
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
            {HeroContent}
          </View>
        </ImageBackground>
      ) : (
        <View style={{ width: '100%', height, backgroundColor: '#ccc' }}>
          {HeroContent}
        </View>
      )}

      {/* PAGE BODY */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 24 }}>
        {children}
      </View>
    </View>
  );
}
