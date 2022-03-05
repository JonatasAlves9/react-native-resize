import { Dimensions, PixelRatio } from 'react-native';

export const widthResize = (width: string) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(width)) / 100
  );
};
