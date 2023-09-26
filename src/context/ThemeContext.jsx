"use client"

import { createContext, useEffect, useState } from "react"
//theme state and group functionality wrapped inside of this context
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if(typeof window !== 'undefined') { //nextjs मा माथि "use client" लेखेपनि server component कै रूपमा लिन्छ त्यसैले यो लाइन लेख्नुपर्छ।
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme ] = useState(() => {
        return getFromLocalStorage();
    }); //toggle btn थिचेर पेजको रङ फेरेपनि यो useState ले गर्दा refresh गर्योभने फेरि पहिल्यैको जस्तै हुन्छ त्यसैले माथिको getFromLocalStorage function बनाउनुपर्छ। 

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme]);
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};