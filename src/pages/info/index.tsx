import React from "react";
import { useLocation } from "react-router-dom";

import {
  MyInfoTemplate,
  Header,
  ShowMyPlan,
  ProFile,
  TimeData,
} from "src/components";

import * as S from "./styled";

export const InfoPage = () => {
  const location = useLocation();
  const infoType = location.pathname.split("/")[2];

  return (
    <>
      <Header value="내정보" />
      <MyInfoTemplate
        infoType={infoType as any}
        listToday={
          <>
            <ShowMyPlan />
          </>
        }
        profile={
          <>
            <ProFile />
          </>
        }
      />
    </>
  );
};
