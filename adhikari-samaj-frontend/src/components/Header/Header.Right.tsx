import React, { Fragment } from "react";

import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { HeaderAnchor } from "./";
import {
  ArrowDownward,
  ArrowDropDown,
  ArrowDropDownOutlined,
  Circle,
  Logout,
  Person,
} from "@mui/icons-material";

interface IRightHeader {
  handleProfileMenuOpen: (event: any) => void;
  handleMenuClose: (event: any) => void;
  anchorEl: HeaderAnchor;
  mobileMoreAnchorEl: HeaderAnchor;
  isMobileMenuOpen: boolean;
  mobileMenuId: string;
  handleMobileMenuClose: () => void;
}

type MenuOptions = {
  label: string;
  icon: JSX.Element;
  clickHandler: () => void;
}[];

export const RightHeader: React.FC<IRightHeader> = ({
  handleProfileMenuOpen,
  handleMenuClose,
  anchorEl,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  mobileMenuId,
  handleMobileMenuClose,
}) => {
  const menuOptions = [
    {
      label: "My Profile",
      icon: <Circle />,
      clickHandler: () => console.log(),
    },
    {
      label: "Logout",
      icon: <Logout />,
      clickHandler: () => console.log("logout"),
    },
  ];
  return (
    <React.Fragment>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        {/* <IconButton
          size="large"
          aria-label="show notifications"
          sx={{
            color: "white",
            backgroundColor: grey[100],
            mr: 2.5,
            "&:focus": { backgroundColor: grey[500] }
          }}
        >
          <Badge badgeContent={100} color="error" max={9}>
            <NotificationsIcon sx={{ stroke: grey[900] }} />
          </Badge>
        </IconButton> */}

        <Box
          sx={{
            flexGrow: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tooltip title="Open Menu">
            <Button
              onClick={handleProfileMenuOpen}
              sx={{ p: 0, textTransform: "none" }}
            >
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 40, height: 40, bgcolor: "#0099cc" }}
              >
                <Person />
              </Avatar>
              <Stack flexDirection="column" spacing="2" mx={2}>
                <Typography
                  variant="body1"
                  gutterBottom
                  component="div"
                  sx={{
                    m: 0,
                    color: "black",
                    fontWeight: "bold",
                    lineHeight: 1,
                  }}
                >
                  Dinesh Adhikari
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ color: grey[600], lineHeight: 1, textAlign: "left" }}
                >
                  None
                </Typography>
              </Stack>
              <ArrowDropDownOutlined />
            </Button>
          </Tooltip>

          {/* Desktop Menus */}
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuOptions menuOptions={menuOptions} />
          </Menu>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            <MenuOptions menuOptions={menuOptions} />
          </Menu>
        </Box>
      </Box>
    </React.Fragment>
  );
};

interface MenuOptionsProps {
  menuOptions: MenuOptions;
}

const MenuOptions = ({ menuOptions }: MenuOptionsProps) => {
  return (
    <Fragment>
      {menuOptions.map(option => (
        <MenuItem key={option.label} onClick={option.clickHandler}>
          <Typography
            textAlign="center"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {option.icon} {option.label}
          </Typography>
        </MenuItem>
      ))}
    </Fragment>
  );
};
