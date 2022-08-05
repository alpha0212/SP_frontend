import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'src/components/common';

import * as S from './styled';

export interface AuthFormTemplateProps {
  formType: 'login' | 'register';
  loginForm: React.ReactNode;
  registerForm: React.ReactNode;
  onSubmit: React.FormEventHandler;
}

export const AuthFormTemplate: React.FC<AuthFormTemplateProps> = ({
  formType,
  loginForm,
  registerForm,
  onSubmit,
}) => {
  const signinsubmit = () => {
    axios.get('http://localhost:8000/input', {}).then(() => {
      // eslint-disable-next-line no-alert
      alert('SignIn!');
    });
  };

  const registersubmit = () => {
    axios.get('http://localhost:8000/register', {}).then(() => {
      // eslint-disable-next-line no-alert
      alert('register');
    });
  };
  return (
    <S.AuthFormTemplateContainer>
      <S.AuthFormTypeContainer formType="login">
        <NavLink to="/auth/login">로그인</NavLink>
        <NavLink to="/auth/register">회원가입</NavLink>
      </S.AuthFormTypeContainer>
      <S.AuthForm onSubmit={onSubmit}>
        {formType === 'login' ? loginForm : registerForm}
        {formType === 'login' ? (
          <Button onClick={signinsubmit} style={{ marginTop: '2.5rem' }}>
            로그인
          </Button>
        ) : (
          <Button onClick={registersubmit} style={{ marginTop: '2.5rem' }}>
            회원가입
          </Button>
        )}
      </S.AuthForm>
    </S.AuthFormTemplateContainer>
  );
};
