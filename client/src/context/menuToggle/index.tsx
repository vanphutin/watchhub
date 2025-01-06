import React, { useState } from "react";
import { MenuContext } from "./MenuContext";

export const ToggleMenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <MenuContext.Provider value={{ isMenuOpen: isOpenMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
