import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...rest }: ButtonProps) => <MuiButton {...rest}>{label}</MuiButton>;

Button.defaultProps = {
  variant: "contained",
  size: "medium",
  color: "primary",
};
