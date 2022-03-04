import { Dimensions, PixelRatio } from 'react-native';

interface heightResizeProps {
  height: string;
}

export const heightResize = ({ height }: heightResizeProps) => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(height)) / 100
  );
};
