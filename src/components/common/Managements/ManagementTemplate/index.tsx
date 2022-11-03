import React, { useState } from "react";
import * as S from "./styled";
import { SideContainer } from "./styled";

export interface ManagementTemplateProps {
  managementType: "search" | "goal";
  search: React.ReactNode;
  goal: React.ReactNode;
}

export const ManagementTemplate: React.FC<ManagementTemplateProps> = ({
  managementType,
  search,
  goal,
}) => {
  const [bool, setBool] = useState(false);
  const isOpen = () => {
    setBool(!bool);
  };
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const isClicked = () => {
    setClicked(!clicked);
    setClicked2(false);
  };
  const isClicked2 = () => {
    setClicked2(!clicked2);
    setClicked(false);
  };

  return (
    <S.Flex>
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
              <S.Menus backgroundProps={clicked} onClick={isClicked}>
                <S.MenuText>학생검색</S.MenuText>
              </S.Menus>
              <S.DoWeekMenu backgroundProps={clicked2} onClick={isClicked2}>
                <S.MenuText>할 일 관리</S.MenuText>
              </S.DoWeekMenu>
            </S.MenuList>
          </>
        ) : (
          <div></div>
        )}
      </SideContainer>
      {clicked ? search : <></>}
    </S.Flex>
  );
};
