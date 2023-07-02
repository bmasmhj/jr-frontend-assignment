import { createContext, useState, ReactNode } from "react";

export type NavContextType = {
    nav: boolean;
    setNav: (nav: boolean) => void;
};

export const NavContext = createContext<NavContextType>({
    nav: false,
    setNav: () => { },
});

export const NavProvider = ({ children }: { children: ReactNode }) => {
    const [nav, setNav] = useState(false);
    return (
        <NavContext.Provider value={{ nav, setNav }}>
            {children}
        </NavContext.Provider>
    );
}

