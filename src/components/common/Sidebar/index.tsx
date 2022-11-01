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
      <button onClick={isOpen}>LOGO</button>
      {bool ? <div>메뉴</div> : <div></div>}
    </SideContainer>
  );
};
