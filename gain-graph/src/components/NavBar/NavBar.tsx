import React, { FC } from 'react';
import { NavBarWrapper } from './NavBar.styled';
import { AppBar, Toolbar, Box } from '@mui/material';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';

interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {
   const { t } = useTranslation();
   return (
      <NavBarWrapper>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  {t("AppName")}
                  <Box sx={{flexGrow:1}}></Box>
                  <LanguageSelector></LanguageSelector>
                  <DarkModeSwitch></DarkModeSwitch>
               </Toolbar>
            </AppBar>
         </Box>
      </NavBarWrapper>
   )
};

export default NavBar;
