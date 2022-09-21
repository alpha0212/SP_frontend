import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import * as S from "./styled";
import {
  MyPlanSideBar,
  TitleText,
  TodayTime,
  Header,
  List,
  HabitTime,
} from "src/components";
export const MyTime: React.FC = () => {
  const isDesktop = useMediaQuery({ maxWidth: "35rem" });
  const isDesktop2 = useMediaQuery({ minWidth: "40rem" });

  return (
    <>
      {isDesktop && <Header />}
      {isDesktop && <List />}
      {isDesktop2 && (
        <>
          <S.FlexContainer>
            <MyPlanSideBar />
            <S.MyTimeContainer>
              <TitleText />
              <S.TimeGraphContainer></S.TimeGraphContainer>
              <S.TimeInputContainer>
                <S.VerticalContainer>
                  <S.Vertical />
                </S.VerticalContainer>
              </S.TimeInputContainer>
            </S.MyTimeContainer>
          </S.FlexContainer>
        </>
      )}
    </>
  );
};
