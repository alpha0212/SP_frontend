import React, { useState } from "react";
import * as S from "./styled";
import { SideContainer } from "./styled";
export const Sidebar: React.FC = () => {
  const [bool, setBool] = useState(false);
  const isOpen = () => {
    setBool(!bool);
  };
  return (
    <SideContainer testProps={bool}>
      <S.HamburgerContainer testProps={bool} onClick={isOpen}>
        <S.HamburgerOne />
        <S.HamburgerTwo testProps={bool} />
        <S.HamburgerThree testProps={bool} />
      </S.HamburgerContainer>
      {bool ? (
        <>
          <S.Logo>Management</S.Logo>
          <S.MenuList>
            <S.Menus>
              <S.MenusText>학생검색</S.MenusText>
            </S.Menus>
          </S.MenuList>
        </>
      ) : (
        <div></div>
      )}
    </SideContainer>
  );
};
