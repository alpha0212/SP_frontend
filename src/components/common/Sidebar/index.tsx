import React, { useState } from "react";
import * as S from "./styled";
import { SideContainer } from "./styled";
export const Sidebar: React.FC = () => {
  const [bool, setBool] = useState(true);
  return <SideContainer testProps={bool}>S</SideContainer>;
};
