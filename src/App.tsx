import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  MyTime,
  TimeData,
  Profile,
  TodayTime,
  HabitTime,
} from "src/components";
import { StList } from "src/components";
import { MainPage, TimesPage } from "./pages";
import { AuthPage } from "./pages/auth";
import { TeacherForm } from "src/components";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="time">
          <Route path="habit" element={<TimesPage />} />
          <Route path="today" element={<TimesPage />} />
          <Route path="goal" element={<TimesPage />} />
        </Route>
        <Route path="timedata/:id" element={<TimeData />} />
        <Route path="auth">
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<AuthPage />} />
          <Route path="teacher" element={<TeacherForm />} />
        </Route>
        <Route path="profile/:id" element={<Profile />} />
        <Route path="st">
          <Route path="list" element={<StList />} />
        </Route>
      </Routes>
    </>
  );
};
