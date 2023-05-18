import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";

interface LeftHeaderProps {
  handleOpenDrawer: () => void;
  isDrawerOpen: boolean;
}

export const LeftHeader = ({
  handleOpenDrawer,
  isDrawerOpen,
}: LeftHeaderProps) => {
  return (
    <React.Fragment>
      {!isDrawerOpen && (
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={handleOpenDrawer}
        >
          <ChevronRightIcon />
        </IconButton>
      )}
      {/* <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Dashboard
      </Typography> */}
    </React.Fragment>
  );
};
