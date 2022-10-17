import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState();
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') || 'Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') || '#03C9D7');

    const handleClickedNav = (clickedNav) => {
        setIsClicked({ ...initialState, [clickedNav]: true });
    };

    const setThemeMode = (mode) => {
        setCurrentMode(mode);
        localStorage.setItem('themeMode', mode);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                handleClickedNav,
                screenSize,
                setScreenSize,
                currentMode,
                setThemeMode,
                themeSettings,
                setThemeSettings,
                currentColor,
                setColor,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export { StateContext, ContextProvider };

export const useStateContext = () => {
    return useContext(StateContext);
};
