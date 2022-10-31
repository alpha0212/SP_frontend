import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router";
import { StList } from "../StList";

export const StMenu = () => {
  const navigate = useNavigate();
  return (
    <S.Background>
      <S.MainContainer>
        <S.SectionContainer>
          <S.TimeInfo>학생 시간데이터</S.TimeInfo>
        </S.SectionContainer>
        <S.SectionContainer2>
          <S.Profile>학생 프로필</S.Profile>
        </S.SectionContainer2>
      </S.MainContainer>
    </S.Background>
  );
};
