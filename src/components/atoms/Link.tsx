import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

const Link = (props: LinkProps) => {
  return <ChakraLink as={RouterLink} {...props} />;
};

export default Link;
