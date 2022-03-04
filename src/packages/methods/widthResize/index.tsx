import { Dimensions, PixelRatio } from 'react-native';

interface widthResizeProps {
  width: string;
}

export const widthResize = ({ width }: widthResizeProps) => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(width)) / 100
  );
};
