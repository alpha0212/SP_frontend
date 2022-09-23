import React, { useRef } from "react";
import logo from "src/assets/book3.jpg";
import { useScrollFadeIn } from "src/hooks/useScrollFadeIn";
import * as S from "./styled";

export const Intro = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("Flash", 1, 0.1),
    2: useScrollFadeIn("Flash", 1, 0.2),
    3: useScrollFadeIn("Flash", 1, 0.3),
    4: useScrollFadeIn("Flash", 1, 0.4),
    5: useScrollFadeIn("Flash", 1, 0.5),
  };

  return (
    <S.Background>
      <S.MainContainer></S.MainContainer>
    </S.Background>
  );
};
