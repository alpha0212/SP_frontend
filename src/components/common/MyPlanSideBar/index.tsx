import React from "react";

import * as S from "./styled";

export const MyPlanSideBar = () => (
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
);
