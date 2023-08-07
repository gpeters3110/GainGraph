import React, { FC, useContext } from 'react';
import { DarkModeSwitchWrapper } from './DarkModeSwitch.styled';
import { DarkModeContext } from '../../App';
import { Button, IconButton } from '@mui/material';
import { MdLightMode, MdDarkMode } from 'react-icons/md'
interface DarkModeSwitchProps {}

const DarkModeSwitch: FC<DarkModeSwitchProps> = () => {
   const { darkMode, setDarkMode } = useContext(DarkModeContext)
   function toggleDark() {
      setDarkMode((old: boolean) => !old)
   }
   return (
      <DarkModeSwitchWrapper>
         <IconButton onClick={toggleDark} color="inherit">{darkMode ? <MdLightMode /> : <MdDarkMode/>}</IconButton>
      </DarkModeSwitchWrapper>
   )
};

export default DarkModeSwitch;
