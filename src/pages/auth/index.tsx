import React from "react";
import { useLocation } from "react-router-dom";

import { FormInput, AuthFormTemplate, RegisterForm } from "src/components";

import * as S from "./styled";

export const AuthPage: React.FC = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];

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
            />
            <FormInput
              label=""
              placeholder="비밀번호를 입력해주세요."
              type="password"
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
        onSubmit={(event: React.FormEvent) => event.preventDefault()}
      />
    </S.AuthPageFormContainer>
  );
};
