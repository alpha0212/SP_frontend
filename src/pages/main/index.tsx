import React from "react";
import { Navbar, Intro, SnackBar } from "src/components";

import * as S from "./styled";

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <SnackBar />
    </>
  );
};
