import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FormInput, AuthFormTemplate, RegisterForm } from "src/components";

import * as S from "./styled";
import { AuthContext } from "src/helper/AuthContext";

export const AuthPage = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [user_id, setUser_id] = useState("");
  const [user_pw, setUser_pw] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const login = () => {
    const data = { user_id: user_id, user_pw: user_pw };
    axios.post("http://localhost:8000/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          user_id: response.data.user_id,
          id: response.data.id,
          status: true,
        });
        navigate("/");
      }
    });
  };
  return (
    <S.AuthPageFormContainer>
      <AuthFormTemplate
        onClick={login}
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
  );
};
