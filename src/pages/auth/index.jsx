import React from "react";
import { useLocation } from "react-router-dom";

import { FormInput, AuthFormTemplate, RegisterForm } from "src/components";
import {
  BackSpace,
  BackSpaceContainer,
} from "src/components/common/Header/styled";

import * as S from "./styled";

export const AuthPage = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];
  return (
    <>
      <BackSpaceContainer to="/">
        <BackSpace>&lt;-</BackSpace>
      </BackSpaceContainer>
      <S.AuthPageFormContainer>
        <AuthFormTemplate
          formType={formType}
          loginForm={
            <>
              <FormInput />
            </>
          }
          registerForm={
            <>
              <RegisterForm />
            </>
          }
        />
      </S.AuthPageFormContainer>
    </>
  );
};
