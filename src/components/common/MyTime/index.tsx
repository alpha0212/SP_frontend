import React from 'react';

import * as S from './styled';

export const MyTime: React.FC = () => (
  <S.MyTimeContainer>
    <S.MyTimeTextContainer>
      <S.MyTimeText>📁 MY시간</S.MyTimeText>
    </S.MyTimeTextContainer>
    <S.HorizontalContainer>
      <S.Horizontal />
    </S.HorizontalContainer>
    <S.MyTimeDataContainer>
      <S.MyTimeData />
      <S.MyTimeData />
      <S.MyTimeData />
    </S.MyTimeDataContainer>
  </S.MyTimeContainer>
);
