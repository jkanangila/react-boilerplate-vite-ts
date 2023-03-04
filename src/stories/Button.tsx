import { styled, VariantProps } from "react-cva";

type BaseButtonProps = VariantProps<typeof BaseButton>;

type ButtonProps = BaseButtonProps & {
  label: string;
};

const BaseButton = styled("button")("button", {
  variants: {
    variant: {
      primary: "text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700",
      secondary: "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white",
    },
    size: {
      small: "px-4 py-2.5",
      medium: "px-5 py-2.5",
      large: "px-6 py-3",
    },
  },
  compoundVariants: [{ variant: "primary", size: "medium" }],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ label, ...rest }: ButtonProps) => (
  <BaseButton {...rest}>{label}</BaseButton>
);
