import { createContext } from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType | null>(null);
