import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FormInput, AuthFormTemplate, RegisterForm } from "src/components";

import * as S from "./styled";

export const AuthPage: React.FC = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [addUser, setUser] = useState({
    user_name: "",
    user_email: "",
    user_id: "",
    user_pw: "",
    user_ch_pw: "",
  });

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let data = await axios.post(`http://localhost:8000/api/users`, addUser);
    if (data.data) navigate("/");
    setUser({
      user_name: "",
      user_email: "",
      user_id: "",
      user_pw: "",
      user_ch_pw: "",
    });
  };

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    console.log("value: ", value);
    setUser({ ...addUser, [e.target.name]: value });
  };

  return (
    <S.AuthPageFormContainer>
      <AuthFormTemplate
        formType={formType as any}
        loginForm={
          <>
            <FormInput
              label=""
              placeholder="아이디를 입력해주세요."
              type="text"
              name="user_id"
              value={addUser.user_id}
              onChange={handleChange}
            />
            <FormInput
              label=""
              placeholder="비밀번호를 입력해주세요."
              type="password"
              value={addUser.user_pw}
              onChange={handleChange}
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
              value={addUser.user_name}
              onChange={handleChange}
            />
            <RegisterForm
              label="이메일"
              placeholder="이메일을 입력해주세요. (선택, 광고수신)"
              type="email"
              name="user_email"
              value={addUser.user_email}
              onChange={handleChange}
            />
            <RegisterForm
              label="아이디"
              placeholder="아이디 입력해주세요."
              type="text"
              name="user_id"
              value={addUser.user_id}
              onChange={handleChange}
            />
            <RegisterForm
              label="비밀번호"
              placeholder="비밀번호 입력해주세요."
              type="password"
              name="user_pw"
              value={addUser.user_pw}
              onChange={handleChange}
            />
            <RegisterForm
              label="비밀번호 확인"
              placeholder="비밀번호 입력해주세요."
              type="password"
              name="user_ch_pw"
              value={addUser.user_ch_pw}
              onChange={handleChange}
            />
          </>
        }
        onSubmit={onSubmit}
      />
    </S.AuthPageFormContainer>
  );
};
