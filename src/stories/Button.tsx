import React from "react";
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<ChakraButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...rest }: ButtonProps) => (
  <ChakraButton {...rest}>{label}</ChakraButton>
);

Button.defaultProps = {
  variant: "solid",
  size: "md",
  color: "blue",
};
