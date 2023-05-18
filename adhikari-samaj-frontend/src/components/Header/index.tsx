import * as React from "react";

import MoreIcon from "@mui/icons-material/MoreVert";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { LeftHeader } from "./Header.Left";
import { RightHeader } from "./Header.Right";

import { useDrawer } from "../hooks/useDrawer";
export type HeaderAnchor = null | Element | ((element: Element) => Element);

const mobileMenuId = "primary-search-account-menu-mobile";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<HeaderAnchor>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<HeaderAnchor>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const { handleOpenDrawer, isDrawerOpen } = useDrawer();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{ boxShadow: "1px 2px 8px #11111114" }}
      >
        <Toolbar sx={{ paddingLeft: isDrawerOpen ? "380px !important" : 0 }}>
          <LeftHeader
            handleOpenDrawer={handleOpenDrawer}
            isDrawerOpen={isDrawerOpen}
          />
          <Box sx={{ flexGrow: 1 }}></Box>

          <RightHeader
            handleProfileMenuOpen={handleProfileMenuOpen}
            handleMenuClose={handleMenuClose}
            anchorEl={anchorEl}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMenuId={mobileMenuId}
            handleMobileMenuClose={handleMobileMenuClose}
          />

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
