import React, { useState } from "react";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  const [change, setchange] = useState(true);
  return (
    <>
      <S.NavbarContainer>
        {change === true ? (
          <S.NavbarText>
            <S.NavbarMyPlanContainer>
              <S.NavbarMyPlan to="time/mytime">MY플랜</S.NavbarMyPlan>
            </S.NavbarMyPlanContainer>
            <S.NavbarLogout
              to="/"
              onClick={() => {
                setchange(!change);
              }}
            >
              로그아웃
            </S.NavbarLogout>
          </S.NavbarText>
        ) : (
          <S.NavbarFormGroup>
            <S.NavbarA
              to="/"
              onClick={() => {
                setchange(!change);
              }}
            >
              로그인
            </S.NavbarA>
            <S.NavbarA to="auth/register">회원가입</S.NavbarA>
          </S.NavbarFormGroup>
        )}
      </S.NavbarContainer>
    </>
  );
};
