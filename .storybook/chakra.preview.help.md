# [Chakra UI Setup](https://chakra-ui.com/getting-started/with-storybook)

You can specify global parameters for the addon in .`storybook/preview.js`. These options are the same as the props to ChakraProvider (without `children`).

```js
// .storybook/preview.js

const theme = require('../path/to/your/theme')

export const parameters = {
  chakra: {
    theme,
  },
}
```