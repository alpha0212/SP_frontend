import React from 'react';

import * as S from './styled';

export const WriteTime: React.FC = () => (
  <S.WriteTimeContainer>
    <S.WriteContainer>
      <S.WriteTimeFont>⏱시간적기</S.WriteTimeFont>
      <S.WriteTimeBox />
      <S.WriteTimeBox />
      <S.WriteTimeBox />
    </S.WriteContainer>
    <S.VerticalContainer>
      <S.Vertical />
    </S.VerticalContainer>
    <S.TodayContainer>
      <S.WriteTimeFont>📋오늘의 시간</S.WriteTimeFont>
      <S.WriteTodayBox />
    </S.TodayContainer>
  </S.WriteTimeContainer>
);
