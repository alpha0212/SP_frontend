import React from "react";
import { NavLink } from "react-router-dom";

import { Button } from "src/components/common";

import * as S from "./styled";

export interface AuthFormTemplateProps {
  formType: "login" | "register";
  loginForm: React.ReactNode;
  registerForm: React.ReactNode;
}

export const AuthFormTemplate: React.FC<AuthFormTemplateProps> = ({
  formType,
  loginForm,
  registerForm,
}) => {
  return (
    <S.AuthFormTemplateContainer>
      <S.AuthFormTypeContainer formType="login">
        <NavLink to="/auth/login">로그인</NavLink>
        <NavLink to="/auth/register">회원가입</NavLink>
      </S.AuthFormTypeContainer>
      <S.AuthForm>
        {formType === "login" ? loginForm : registerForm}
        <S.ButtonContainer>
          {formType === "login" ? (
            <Button type="submit" style={{ marginTop: "2.5rem" }}>
              로그인
            </Button>
          ) : (
            <Button type="submit" style={{ marginTop: "2.5rem" }}>
              회원가입
            </Button>
          )}
        </S.ButtonContainer>
      </S.AuthForm>
    </S.AuthFormTemplateContainer>
  );
};