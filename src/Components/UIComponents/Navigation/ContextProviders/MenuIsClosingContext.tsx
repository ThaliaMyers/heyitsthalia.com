import {createContext, type ReactNode, useContext, useMemo, useState} from "react";

type MenuIsClosingValue = [boolean, (v: boolean) => void];

const MenuIsClosingContext = createContext<MenuIsClosingValue | null>(null);

export function MenuIsClosingProvider({ children }: {children: ReactNode }) {
    const [isClosing, setIsClosing] = useState(false);
    
    // Only re-computes value when isClosing changes
    const value = useMemo<MenuIsClosingValue>(() => [isClosing, setIsClosing], [isClosing]);
    
    return (
        <MenuIsClosingContext.Provider value={value}>
            {children}
        </MenuIsClosingContext.Provider>
    )
}

export function useMenuIsClosing() {
    const ctx = useContext(MenuIsClosingContext);
    if (ctx === null) {
        throw new Error("useMenuIsClosing must be used within MenuIsClosingProvider");
    }
    return ctx;
}