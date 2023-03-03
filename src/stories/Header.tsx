import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Acme
        </Typography>
        {user ? (
          <React.Fragment>
            <Typography variant="h6" mr={2}>
              {user.name}
            </Typography>
            <Button role="button" color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </React.Fragment>
        ) : (
          <Button role="button" color="inherit" onClick={onLogin}>
            Log in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  </Box>
);
