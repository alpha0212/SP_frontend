import React from "react";

import * as S from "./styled";

export const TitleText = () => (
  <S.TodayStudyContainer>
    <S.TodayStudy>
      <S.TodayStudyTextBig>오늘의 공부</S.TodayStudyTextBig>
      <S.TextContainer>
        <S.TodayStudyTextsm>
          오늘 공부한 과목과 시간을 기록해 봅시다.
        </S.TodayStudyTextsm>
        <S.TodayStudyTextsmRight>공부 시간 그래프</S.TodayStudyTextsmRight>
      </S.TextContainer>
    </S.TodayStudy>
  </S.TodayStudyContainer>
);
