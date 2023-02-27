import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink, LinkProps } from "@mui/material";

const Link = ({ children, sx, underline = "none", href, ...rest }: LinkProps) => {
  return (
    <MuiLink
      sx={{
        fontSize: "inherit",
        color: "inherit",
        fontStyle: "inherit",
        fontFamily: "inherit",
        ...sx,
      }}
      component={RouterLink}
      underline={underline}
      to={href ?? ""}
      {...rest}>
      {children}
    </MuiLink>
  );
};

export default Link;
