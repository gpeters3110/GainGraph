import React, { FC } from 'react';
import { NavBarWrapper } from './NavBar.styled';
import { AppBar, Toolbar, Box } from '@mui/material';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';

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
               </Toolbar>
            </AppBar>
         </Box>
      </NavBarWrapper>
   )
};

export default NavBar;
