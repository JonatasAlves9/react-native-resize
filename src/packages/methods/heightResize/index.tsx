import { Dimensions, PixelRatio } from 'react-native';

export const heightResize = (height: string) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(height)) / 100
  );
};
