import React from "react";

import { Review, Footer, Intro } from "src/components";

import * as S from "./styled";

export const MainPage: React.FC = () => (
  <>
    <Intro />
    <S.Line>📌 부모님들의 솔직 리뷰</S.Line>
    <Review />
    <Footer />
  </>
);
