import { Icon, IconProps } from "@iconify/react";
import clsx from "clsx";

const Iconify = ({ className, ...rest }: IconProps) => {
  return <Icon className={clsx(className, "h-6 w-6")} {...rest} />;
};

export default Iconify;
