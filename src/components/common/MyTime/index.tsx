import React from "react";

import * as S from "./styled";
import { TodayStudyTextBig } from "./styled";

export const MyTime: React.FC = () => (
  <S.MyTimeContainer>
    <S.MyTimeDataContainer>
      <S.MyTimeData />
      <S.MyPlanText>MY플랜</S.MyPlanText>
      <S.SelectMy>
        <S.SelectMyList>
          <S.SelectMyListText to="">오늘의 공부</S.SelectMyListText>
        </S.SelectMyList>
        <S.SelectMyList>
          <S.SelectMyListText to="habit">습관 관리</S.SelectMyListText>
        </S.SelectMyList>
        <S.SelectMyList>
          <S.SelectMyListText to="mygoal">나의 목표</S.SelectMyListText>
        </S.SelectMyList>
      </S.SelectMy>
    </S.MyTimeDataContainer>
    <S.TodayStudyContainer>
      <S.TodayStudy>
        <S.TodayStudyTextBig>오늘의 공부</S.TodayStudyTextBig>
        <S.TodayStudyTextsm>
          오늘 공부한 과목과 시간을 기록해 봅시다.
        </S.TodayStudyTextsm>
      </S.TodayStudy>
    </S.TodayStudyContainer>
    <S.TodayGraph />
  </S.MyTimeContainer>
);
