import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { CONSTANTS } from '../constants';

interface ImageProps {
  size?: number;
  loaderColor?: string;
  containerStyle?: object;
}

export const Loading = ({
  loaderColor = CONSTANTS.LOADER_COLOR,
  containerStyle,
}: ImageProps) => {
  return (
    <View style={[containerStyle, styles.imageLoader]}>
      <ActivityIndicator size="small" color={loaderColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
  },
});
