import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StatusProps {
  size: number;
  rounded?: boolean;
  activeCircleColor?: string;
}

export const Stauts = ({ size, rounded, activeCircleColor }: StatusProps) => {
  return (
    <View
      style={[
        styles.statusStyle,
        {
          backgroundColor: activeCircleColor,
        },
        {
          width: size / 4,
          height: size / 4,
          borderRadius: size / 4,
          bottom: rounded ? size / 32 : -(size / 32),
          right: rounded ? size / 32 : -(size / 32),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  statusStyle: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderColor: 'white',
    borderWidth: 2,
  },
});
