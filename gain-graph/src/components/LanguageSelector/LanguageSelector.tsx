import React, { FC, useState } from 'react';
import { LanguageSelectorWrapper } from './LanguageSelector.styled';
import i18n from '../../i18n';
import { Button, IconButton, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { HiLanguage } from 'react-icons/hi2'
interface LanguageSelectorProps {}
const options = [
   { name: 'English', id: 'en' },
   { name: 'Deutsch', id: 'de' }
];
const LanguageSelector: FC<LanguageSelectorProps> = () => {
   const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const [selectedIndex, setSelectedIndex] = React.useState(1);
   const open = Boolean(anchorEl);
   const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
      
   };

   const handleMenuItemClick = (
      event: React.MouseEvent<HTMLElement>,
      index: number,
   ) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      i18n.changeLanguage(options[index].id);
      setSelectedLanguage(options[index].id);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   return (
      <LanguageSelectorWrapper>
         <div>
            <IconButton
               onClick={handleClickListItem}
               color="inherit">
               <HiLanguage/>
            </IconButton>
            <Menu
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
            >
               {options.map((option, index) => (
                  <MenuItem
                     key={option.name}
                     selected={index === selectedIndex}
                     onClick={(event) => handleMenuItemClick(event, index)}
                  >
                     {option.name}
                  </MenuItem>
               ))}
            </Menu>
         </div>
         
      </LanguageSelectorWrapper>
   )
};

export default LanguageSelector;
