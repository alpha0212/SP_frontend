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
        <S.BackSpaceContainer to="/">
          <S.BackSpace style={{ fontWeight: 400 }}>&lt;-</S.BackSpace>
        </S.BackSpaceContainer>
        <S.Container>
          <S.Header>{value}</S.Header>
        </S.Container>
      </S.HeaderContainer>
    </>
  );
};
