import React from 'react';

import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness5Icon from '@mui/icons-material/Brightness5';

import { MyHeader, TituloPrincipal } from "./styles";
import { useTheme, useThemeUpdate } from "../ThemeContext/ThemeContext"

export default function Header() {
    const dark = useTheme();
    const toggleTheme = useThemeUpdate();
    const theme = {
        backgroundColor: dark ? "#202124" : "#008000" ,
        border: dark && "solid 1px #eee"
    }
  return (
    <div>
        <MyHeader style={theme}>
            <TituloPrincipal>Free The Music</TituloPrincipal>
            <div onClick={toggleTheme}>
                {dark ? (
                    <Brightness5Icon sx={{color:"white"}}/>
                ) :(
                    <ModeNightIcon  sx ={{color:"black"}}/>       
                )}
            </div>
           
        </MyHeader>
    </div>
  )
}
