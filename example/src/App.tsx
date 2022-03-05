import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { widthResize, fontResize } from 'react-native-resize';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Exemplo de texto</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Exemplo de texto</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Exemplo de texto</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Exemplo de texto</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  box: {
    width: widthResize('20'),
    height: widthResize('40'),
    backgroundColor: 'red',
    marginLeft: widthResize('2'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontResize('12'),
  },
});
