import React from "react";

import * as S from "./styled";
import {
  TimeGraph,
  MyPlanSideBar,
  TitleText,
  TimeInput,
  TimeInputButton,
} from "src/components";
export const Habit: React.FC = () => (
  <>
    <S.FlexContainer>
      <MyPlanSideBar />
      <S.MyTimeContainer>
        <TitleText />
        <S.TimeGraphContainer>
          <TimeGraph />
        </S.TimeGraphContainer>
        <S.TimeInputContainer>
          <TimeInput />
          <S.VerticalContainer>
            <S.Vertical />
          </S.VerticalContainer>
          <TimeInputButton>제출하기</TimeInputButton>
        </S.TimeInputContainer>
      </S.MyTimeContainer>
    </S.FlexContainer>
  </>
);
