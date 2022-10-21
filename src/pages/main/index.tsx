import React from "react";
import { Navbar, Intro, SnackBar } from "src/components";

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <SnackBar />
    </>
  );
};
