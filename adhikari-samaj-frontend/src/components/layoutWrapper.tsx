import React from "react";
import Header from "./Header";
import SideBar from "./Sidebar";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useDrawer } from "./hooks/useDrawer";

const useStyles = makeStyles({
  root: {
    "& .MuiContainer-root": {
      maxWidth: (isDrawerOpen: boolean) => (!isDrawerOpen ? "100%" : ""),
    },
  },
});
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isDrawerOpen } = useDrawer();
  const styles = useStyles(isDrawerOpen);
  return (
    <Box>
      <SideBar />
      <Header />
      <main
        style={{
          marginLeft: isDrawerOpen ? 340 : 0,
          padding: "4rem",
        }}
        className={styles.root}
      >
        {children}
      </main>
    </Box>
  );
};

export default LayoutWrapper;
