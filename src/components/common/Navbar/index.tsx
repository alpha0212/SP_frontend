import React from "react";

import { Ad } from "../Ad";
import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <>
      <Ad />
      <S.NavbarContainer>
        <S.NavbarText>
          <S.NavbarA to="#">수강신청</S.NavbarA>
          <S.NavbarA to="auth/login">로그인</S.NavbarA>
          <S.NavbarA to="auth/register">회원가입</S.NavbarA>
          <S.NavbarA to="time/mytime">MY시간</S.NavbarA>
          <S.NavbarA to="writetime">시간적기</S.NavbarA>
          <S.NavbarA to="time/timedata">시간보기</S.NavbarA>
        </S.NavbarText>
      </S.NavbarContainer>
    </>
  );
};
