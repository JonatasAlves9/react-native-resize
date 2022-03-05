import { Dimensions, PixelRatio, Platform } from 'react-native';

const scale = Dimensions.get('window').width / 320;

export function fontResize(size: string) {
  const newSize = parseFloat(size) * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}
