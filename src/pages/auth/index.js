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

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/auth", data).then(() => {
      console.log(data);
      navigate("/");
    });
  };
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
            <FormInput
              placeholder="아이디를 입력해주세요."
              type="text"
              onChange={(event) => {
                setUser_id(event.target.value);
              }}
            />
            <FormInput
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={(event) => {
                setUser_pw(event.target.value);
              }}
            />
          </>
        }
        registerForm={
          <>
            <RegisterForm
              label="이름"
              placeholder="이름을 입력해주세요."
              type="text"
              name="user_name"
            />
            <RegisterForm
              label="이메일"
              placeholder="이메일을 입력해주세요. (선택, 광고수신)"
              type="email"
              name="user_email"
            />
            <RegisterForm
              label="아이디"
              placeholder="아이디 입력해주세요."
              type="text"
              name="user_id"
            />
            <RegisterForm
              label="비밀번호"
              placeholder="비밀번호 입력해주세요."
              type="password"
              name="user_pw"
            />
            <RegisterForm
              label="비밀번호 확인"
              placeholder="비밀번호 입력해주세요."
              type="password"
              name="user_ch_pw"
            />
          </>
        }
        onSubmit={onSubmit}
      />
    </S.AuthPageFormContainer>
  );
};
