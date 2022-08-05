import React from 'react';

import { Review } from 'src/components';

import * as S from './styled';

export const MainPage: React.FC = () => (
  <>
    <S.MainPageContainer>STUDY PLAN TRAINING</S.MainPageContainer>
    <S.Line>📌 부모님들의 솔직 리뷰</S.Line>
    <Review />
  </>
);
