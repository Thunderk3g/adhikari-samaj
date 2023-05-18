import { useState, createContext } from "react";

interface DrawerContextProps {
  isDrawerOpen: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
}
export const DrawerContext = createContext<DrawerContextProps>({
  isDrawerOpen: true,
  handleOpenDrawer: () => {
    console.warn("handleOpenDrawer is not implemented");
  },
  handleCloseDrawer: () => {
    console.warn("handleCloseDrawer is not implemented");
  },
});

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(true);

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  return (
    <DrawerContext.Provider
      value={{ isDrawerOpen, handleOpenDrawer, handleCloseDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
