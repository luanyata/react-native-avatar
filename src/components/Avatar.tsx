import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import {
  getContainerStyle,
  getRandomColor,
  getTextStyle,
  getUserInitial,
} from '../helpers';
import { Loading } from './Loading';
import { CONSTANTS } from '../constants';
import { Stauts } from './Stauts';

export const Avatar = ({
  initialName = '',
  userName = '',
  src = '',
  size = CONSTANTS.SIZE,
  backgroundColor = '',
  loaderColor = CONSTANTS.LOADER_COLOR,
  textColor = CONSTANTS.TEXT_COLOR,
  fontSize = CONSTANTS.FONT_SIZE,
  rounded = false,
  backgroundColors = CONSTANTS.BACKGROUND_COLORS,
  activeCircleColor = CONSTANTS.ACTIVE_CIRCLE_COLOR,
  active = false,
}) => {
  const [imageLoading, onLoadImage] = useState(false);
  const userInitialName = initialName || getUserInitial({ userName });
  const avatarBackgroundColor =
    backgroundColor || getRandomColor({ userName, backgroundColors });

  const containerStyle = getContainerStyle({ size, rounded });
  const textStyle = getTextStyle({ textColor, size, fontSize });

  return (
    <View>
      {src ? (
        <View>
          <Image
            style={containerStyle}
            source={{
              uri: src,
            }}
            onLoadStart={() => onLoadImage(true)}
            onLoadEnd={() => onLoadImage(false)}
          />
          {imageLoading && (
            <Loading
              size={size}
              loaderColor={loaderColor}
              containerStyle={containerStyle}
            />
          )}
        </View>
      ) : (
        <View
          style={[
            containerStyle,
            {
              backgroundColor: avatarBackgroundColor,
            },
          ]}
        >
          <Text style={textStyle}>{userInitialName}</Text>
        </View>
      )}
      {active && !imageLoading && (
        <Stauts {...{ size, rounded, activeCircleColor }} />
      )}
    </View>
  );
};
