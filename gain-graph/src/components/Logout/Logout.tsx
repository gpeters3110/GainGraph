import React, { FC, useContext } from 'react';
import { LogoutWrapper } from './Logout.styled';
import { IconButton } from '@mui/material';
import { RiShutDownLine } from 'react-icons/ri';
import useToken from '../../useToken';
import { TokenContext } from '../../App';

interface LogoutProps {}

const Logout: FC<LogoutProps> = () => {
   const { token, setToken } = useContext(TokenContext);
   return (
      <LogoutWrapper>
         <IconButton onClick={()=>setToken(null)}><RiShutDownLine /></IconButton>
      </LogoutWrapper>
   )
};

export default Logout;
