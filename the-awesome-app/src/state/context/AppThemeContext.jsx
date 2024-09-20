import React, { useReducer, useState } from "react";

export const initialThemeState = {
    mode: 'light',
    changeMode: undefined
}

//create the context
export const AppThemeContext = React.createContext(initialThemeState);

function reducer(state, action){

    debugger;
    if(action.type === 'set_mode_dark'){
        return 'dark'
    }

    if(action.type === 'set_mode_light'){
        return 'light'
    }
    return state;
}

export function AppThemeContextProvider(props){

    //const [mode, setMode] = useState(initialThemeState.mode);
    const [mode, dispatch] = useReducer(reducer, initialThemeState.mode);

    return (
        // <AppThemeContext.Provider value={{mode: mode, changeMode: setMode}}>
        <AppThemeContext.Provider value={{mode: mode, changeMode: dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}