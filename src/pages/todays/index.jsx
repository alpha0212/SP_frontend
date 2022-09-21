import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  GoalTime,
  TodayTime,
  HabitTime,
  TimesFormTemplate,
} from "src/components";

import * as S from "./styled";

export const TimesPage = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];

  return (
    <>
      <S.HeaderContainer>
        <S.Header>마이플랜</S.Header>
      </S.HeaderContainer>

      <TimesFormTemplate
        formType={formType}
        todayForm={
          <>
            <TodayTime />
          </>
        }
        habitForm={
          <>
            <HabitTime />
          </>
        }
        goalForm={
          <>
            <GoalTime />
          </>
        }
      ></TimesFormTemplate>
    </>
  );
};
