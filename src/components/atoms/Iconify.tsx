import { Icon } from "@iconify/react";
import { Box, BoxProps } from "@mui/material";

const Iconify = ({ icon, sx, ...rest }: BoxProps & { icon: string }) => {
  return (
    <Box
      sx={{ height: 24, width: 24, color: "text.disabled", ...sx }}
      component={Icon}
      icon={icon}
      {...rest}
    />
  );
};

export default Iconify;
