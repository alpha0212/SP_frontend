import React from "react";
import { useLocation } from "react-router-dom";

import {
  GoalTime,
  TodayTime,
  HabitTime,
  TimesFormTemplate,
  Header,
} from "src/components";

export const TimesPage = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];

  return (
    <>
      <Header value="마이플랜" />

      <TimesFormTemplate
        formType={formType as any}
        todayForm={
          <>
            <TodayTime />
          </>
        }
        habitForm={
          <>
            <HabitTime />
          </>
        }
        goalForm={
          <>
            <GoalTime />
          </>
        }
      ></TimesFormTemplate>
    </>
  );
};
