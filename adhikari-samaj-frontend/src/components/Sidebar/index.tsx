import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

// import logo from "@cal/assets/images/logo.png";
// import flag from "@cal/assets/images/flag.png";
// import pattern from "@cal/assets/images/pattern.png";
import { useDrawer } from "../hooks/useDrawer";
import {
  Article,
  ContactPhone,
  DownloadOutlined,
  Grass,
  HistoryEdu,
  Info,
  PeopleAlt,
  QuestionAnswer,
} from "@mui/icons-material";

const drawerWidth = 340;
const menuItems = [
  {
    feature: "Home",
    icon: <HomeIcon style={{ color: "white" }} />,
    path: "/",
  },
  {
    feature: "About Us",
    icon: <Info style={{ color: "white" }} />,
    path: "/about",
  },
  {
    feature: "Bansawoli",
    icon: <HistoryEdu style={{ color: "white" }} />,
    path: "/users",
  },
  {
    feature: "Members",
    icon: <PeopleAlt style={{ color: "white" }} />,
    path: "/members",
  },
  {
    feature: "Notice",
    icon: <Article style={{ color: "white" }} />,
    path: "/notice",
  },
  {
    feature: "FAQ",
    icon: <QuestionAnswer style={{ color: "white" }} />,
    path: "/faq",
  },

  {
    feature: "Downloads",
    icon: <DownloadOutlined style={{ color: "white" }} />,
    path: "/rbprSampleUnit",
  },
  {
    feature: "Contact",
    icon: <ContactPhone style={{ color: "white" }} />,
    path: "/rbprSampleUnit",
  },
];

const DrawerHeader = styled("div")(({ theme }) => ({
  padding: theme.spacing(2, 3),
  textAlign: "center",
  ...theme.mixins.toolbar,
}));

const PersistentDrawerLeft = () => {
  const theme = useTheme();
  const { isDrawerOpen, handleCloseDrawer } = useDrawer();
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          background: "#004A89",
          color: "#fff",
          width: drawerWidth,
          boxSizing: "border-box",
          "&::after": {
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            width: "100%",
            height: 300,
            zIndex: -1,
            content: '""',
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
    >
      <DrawerHeader>
        <IconButton
          onClick={handleCloseDrawer}
          sx={{ color: "#fff", position: "absolute", right: 0 }}
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <img
          src={"/src/assets/images/nepal-animated.gif"}
          alt=""
          style={{
            maxHeight: "40px",
          }}
        />
        <Typography sx={{ marginTop: 0, fontSize: 20 }}>
          Adhikari Sewa Samaj
        </Typography>
        <Typography sx={{ marginTop: 0, fontSize: 12 }}>
          Kankai-4 Surunga Jhapa, Nepal
        </Typography>
      </DrawerHeader>
      <Divider color="#fff" sx={{ marginBottom: 1.5 }} />
      <List>
        {menuItems.map(item => (
          <ListItem
            button
            key={item.feature}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.feature} />
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          padding: 0,
          margin: 0,
          zIndex: -1,
        }}
      >
        {/* <img src={flag} alt="nepali flag" style={{ margin: 0 }} /> */}
      </List>
    </Drawer>
  );
};

export default PersistentDrawerLeft;
