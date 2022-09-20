import React from "react";

import * as S from "./styled";
import { MyPlanSideBar, TitleText, TimeInput } from "src/components";
export const MyTime: React.FC = () => (
  <>
    <S.HeaderContainer>
      <S.Header>마이플랜</S.Header>
    </S.HeaderContainer>
    <S.FlexContainer>
      <MyPlanSideBar />
      <S.MyTimeContainer>
        <TitleText />
        <S.TimeGraphContainer></S.TimeGraphContainer>
        <S.TimeInputContainer>
          <TimeInput />
          <S.VerticalContainer>
            <S.Vertical />
          </S.VerticalContainer>
        </S.TimeInputContainer>
      </S.MyTimeContainer>
    </S.FlexContainer>
  </>
);
