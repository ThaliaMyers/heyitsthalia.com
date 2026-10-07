import {createContext, type ReactNode, useContext, useMemo, useState} from "react";

type MenuExpandedValue = [boolean, (v: boolean) => void];

const MenuExpandedContext = createContext<MenuExpandedValue | null>(null);

export function MenuExpandedProvider({ children }: {children: ReactNode }) {
    const [isClosing, setIsClosing] = useState(false);
    
    // Only re-computes value when isClosing changes
    const value = useMemo<MenuExpandedValue>(() => [isClosing, setIsClosing], [isClosing]);
    
    return (
        <MenuExpandedContext.Provider value={value}>
            {children}
        </MenuExpandedContext.Provider>
    )
}

export function useMenuExpanded() {
    const ctx = useContext(MenuExpandedContext);
    if (ctx === null) {
        throw new Error("useMenuIsClosing must be used within MenuIsClosingProvider");
    }
    return ctx;
}