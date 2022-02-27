import React, { useState, useEffect, useContext } from 'react'

export const ThemeContext = React.createContext()
export const ThemeUpdate = React.createContext()

export const useTheme = () =>{
    return useContext(ThemeContext)
}
export const useThemeUpdate = () =>{
    return useContext(ThemeUpdate)
}

export default function MyThemeContext({children}) {
    const [dark, setDark] = useState(false);

    useEffect(() =>{
        document.body.style.backgroundColor = dark ? "#202124" : "#eee" 
    }, [dark])

    const toggleTheme = () =>{
        setDark(prevdark => !prevdark)
    }
  return (
    <div>
        <ThemeContext.Provider value={dark}>
            <ThemeUpdate.Provider value={toggleTheme}>
             {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    </div>
  )
}
