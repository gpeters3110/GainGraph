import React, { FC } from 'react';
import { NavBarWrapper } from './NavBar.styled';
import { AppBar, Toolbar, Box, IconButton } from '@mui/material';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import { useTranslation } from 'react-i18next';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { CgGym } from 'react-icons/cg'
import { BsGraphUpArrow } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import Logout from '../Logout/Logout';
interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => {
   const { t } = useTranslation();
   const nav = useNavigate();
   const training = () => nav('/training');
   const analysis = () => nav('analysis'); 
   return (
      <NavBarWrapper>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" enableColorOnDark>
               <Toolbar>
                  {t("AppName")}
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <IconButton onClick={training}><CgGym color='inherit' /></IconButton>
                  <IconButton onClick={analysis}><BsGraphUpArrow /></IconButton>
                  <LanguageSelector></LanguageSelector>
                  <DarkModeSwitch></DarkModeSwitch>
                  <Logout/>
               </Toolbar>
            </AppBar>
         </Box>
      </NavBarWrapper>
   )
};

export default NavBar;
