import React from "react";
import * as S from "./styled";

export const StMenu = () => {
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
