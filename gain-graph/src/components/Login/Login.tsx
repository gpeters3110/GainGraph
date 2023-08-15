import React, { FC, FormEvent, useContext, useState } from 'react';
import { LoginWrapper } from './Login.styled';
import { Button, Input } from '@mui/material';
import { useTranslation } from 'react-i18next';
import config from '../../config';
import { TokenContext } from '../../App';
interface LoginProps { }
const Login: FC<LoginProps> = (props) => {
   const [username, setUserName] = useState<string>();
   const [password, setPassword] = useState<string>();
   const { token, setToken } = useContext(TokenContext);
   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const token = await fetch(`http://${config.serverIp}:${config.serverPort}/user`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ username, password })
      }).then(res => {
         return res.json().then(v=>v.token);
      }).catch(reason => {
         console.error(reason);
         return null;
      })
      setToken(token)

   }
   const { t } = useTranslation();
   return (
      <LoginWrapper onSubmit={handleSubmit}>
         <Input onChange={e=>{setUserName(e.target.value)}} placeholder={t('Username')}></Input>
         <Input onChange={e=>{setPassword(e.target.value)}} placeholder={t('Password')} type='password'></Input>
         <Button type="submit">{t('SignIn')}</Button>
      </LoginWrapper>
   )
};

export default Login;
