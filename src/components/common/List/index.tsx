import React, { useState } from "react";
import * as S from "./styled";

export const List = () => {
  const [working, setWorking] = useState(false);
  const [working2, setWorking2] = useState(true);
  const [working3, setWorking3] = useState(true);
  const select = () => {
    setWorking(false);
    setWorking2(true);
    setWorking3(true);
  };
  const select2 = () => {
    setWorking(true);
    setWorking2(false);
    setWorking3(true);
  };
  const select3 = () => {
    setWorking(true);
    setWorking2(true);
    setWorking3(false);
  };
  return (
    <S.ListOfMenu>
      <S.ListContainer>
        <S.TodayStudyContainer
          onClick={select}
          style={{
            borderBottom: !working ? "0.2rem solid #2CCCE6" : "none",
            width: "10rem",
          }}
        >
          <S.TodayStudy to="/time/today">오늘의 공부</S.TodayStudy>
        </S.TodayStudyContainer>
        <S.HabitSetContainer
          onClick={select2}
          style={{
            borderBottom: !working2 ? "0.2rem solid #2CCCE6" : "none",
            width: "9rem",
          }}
        >
          <S.HabitSet to="/time/habit">습관 관리</S.HabitSet>
        </S.HabitSetContainer>
        <S.MyGoalContainer
          onClick={select3}
          style={{
            borderBottom: !working3 ? "0.2rem solid #2CCCE6" : "none",
            width: "9rem",
          }}
        >
          <S.MyGoal to="/time/mytime">나의 목표</S.MyGoal>
        </S.MyGoalContainer>
      </S.ListContainer>
    </S.ListOfMenu>
  );
};
