# React Native

A Lib React Native to get the real dimensions. </br></br>
[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heyman333/react-native-responsive-fontSize/blob/master/LICENSE)

<strong>This library was developed to solve a simple problem that generates a big headache. 👌</strong>

<hr />

## Installation

```sh
npm install react-native-resize
  # or
yarn add react-native-resize
```

## Example

```js
import { widthResize, heightResize } from "react-native-resize";
import { Image } from "react-native";

<Image
	source={{ uri: 'https://example_url_image.com.br' }}
	width={widthResize(200)}
	height={heightResize(200)}
/>
```

#### Methods

|              |                  arguments                   | Description                                                                                         |
| :----------: | :------------------------------------------: | --------------------------------------------------------------------------------------------------- |
| widthResize |               value: string                | The width will be calculated based on the pixel ratio of each device |
|   heightResize    | value: string | A altura será calculada com base no pixel ratio de cada dispositivo
| fontResize | value: string | Resizes font for responsiveness based on device aspect ratio |

## Author

<a href="https://www.linkedin.com/in/j%C3%B4natas-alves-13b868183/">Jônatas Alves</a></br>


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflo
## License

MIT
