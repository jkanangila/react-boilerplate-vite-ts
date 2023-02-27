import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const Iconify = (props: BoxProps & { icon: string }) => {
  return <Box as={Icon} w="24px" h="24px" {...props} />;
};

export default Iconify;
