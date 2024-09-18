import React from "react";

export const initialThemeState = {
    mode: 'dark'
}

//create the context
export const AppThemeContext = React.createContext(initialThemeState);