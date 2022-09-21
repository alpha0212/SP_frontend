import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styled";
import { TodayTime } from "src/components";

export interface TimesFormTemplateProps {
  formType: "today" | "habit" | "goal";
  todayForm: React.ReactNode;
  habitForm: React.ReactNode;
  goalForm: React.ReactNode;
}

export const TimesFormTemplate: React.FC<TimesFormTemplateProps> = ({
  formType,
  todayForm,
  habitForm,
  goalForm,
}) => {
  return (
    <>
      <S.ListOfMenu>
        <S.ListTypeContainer>
          <S.TodayStudyContainer formType="today">
            <S.TodayStudy to="/time/today">오늘의 공부</S.TodayStudy>
          </S.TodayStudyContainer>
          <S.HabitSetContainer formType="habit">
            <S.HabitSet to="/time/habit">습관 관리</S.HabitSet>
          </S.HabitSetContainer>
          <S.MyGoalContainer formType="goal">
            <S.MyGoal to="/time/goal">나의 목표</S.MyGoal>
          </S.MyGoalContainer>
        </S.ListTypeContainer>
      </S.ListOfMenu>
      <S.FlexContainer>
        <S.MyTimeContainer>
          {formType === "today" ? todayForm : <></>}
          {formType === "habit" ? habitForm : <></>}
          {formType === "goal" ? goalForm : <></>}
        </S.MyTimeContainer>
      </S.FlexContainer>
    </>
  );
};
