import React from "react";

import * as S from "./styled";
interface HeaderProps {
  value: string;
}
export const Header: React.FC<HeaderProps> = (title) => {
  const { value } = title;
  return (
    <>
      <S.HeaderContainer>
        <S.Container>
          <S.Header>{value}</S.Header>
        </S.Container>
      </S.HeaderContainer>
    </>
  );
};
