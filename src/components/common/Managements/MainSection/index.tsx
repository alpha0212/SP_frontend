import React from "react";
import { StList } from "../../Students";
import * as S from "./styled";
export interface Props {
  props1: boolean;
}
export const MainSection: React.FC<Props> = (props1) => {
  return !props1 ? <></> : <StList />;
};
