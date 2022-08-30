import React from "react";

import * as S from "./styled";
import { TimeGraph, MyPlanSideBar, TitleText, TimeInput } from "src/components";
export const MyTime: React.FC = () => (
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
        </S.TimeInputContainer>
      </S.MyTimeContainer>
    </S.FlexContainer>
  </>
);
