import React from 'react';

import { Horizontal, HorizontalContainer } from '../MyTime/styled';
import * as S from './styled';

export const TimeData: React.FC = () => (
  <S.TimeDataContainer>
    <S.TimeTextContainer>
      <S.TimeText>🗓 YY.MM.DD</S.TimeText>
    </S.TimeTextContainer>
    <HorizontalContainer>
      <Horizontal />
    </HorizontalContainer>
    <S.TImeDataBoxContainer>
      <S.TimeDataBox />
    </S.TImeDataBoxContainer>
  </S.TimeDataContainer>
);
