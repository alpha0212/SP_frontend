import React from "react";

import * as S from "./styled";
import { TimeGraph, MyPlanSideBar, TitleText } from "src/components";
export const MyTime: React.FC = () => (
  <S.MyTimeContainer>
    <MyPlanSideBar />
    <TitleText />
    <TimeGraph />
  </S.MyTimeContainer>
);
