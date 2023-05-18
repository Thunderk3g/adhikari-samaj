import { useContext } from "react";
import { DrawerContext } from "../context/Drawer";

export const useDrawer = () => useContext(DrawerContext);
