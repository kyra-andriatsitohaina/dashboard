import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type AsideContextType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const AsideContext = createContext<AsideContextType | undefined>(undefined);
