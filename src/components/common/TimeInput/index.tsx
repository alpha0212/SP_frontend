import React from "react";

import * as S from "./styled";

export const TimeInput = () => (
  <>
    <S.InputTimeContainer>
      <S.SelectOption>
        <S.Options value="">과목</S.Options>
        <S.Options value="kor">국어</S.Options>
        <S.Options value="math">수학</S.Options>
        <S.Options value="eng">영어</S.Options>
        <S.Options value="All">전체</S.Options>
      </S.SelectOption>
      <S.InputContainer>
        <S.InputTime />
        <S.InputTImeTitle>시간</S.InputTImeTitle>
      </S.InputContainer>
      <S.InputContainer>
        <S.InputTime />
        <S.InputTimeTitleMin>분</S.InputTimeTitleMin>
      </S.InputContainer>
    </S.InputTimeContainer>
  </>
);
