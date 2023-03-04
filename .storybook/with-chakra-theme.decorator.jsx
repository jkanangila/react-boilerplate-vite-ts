import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

export const WithChakraTheme = (Story, context) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Story />
    </ChakraProvider>
  );
};
