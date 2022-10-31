import React from "react";
import { Route, Routes } from "react-router-dom";

import { TimeData, Footer } from "src/components";
import { StList, StMenu } from "src/components";
import {
  MainPage,
  TimesPage,
  InfoPage,
  AuthPage,
  ManagementPage,
} from "./pages";
import { TeacherForm } from "src/components";
import { NotFound } from "./404";
//react-toastify
export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="time">
          <Route path="today" element={<TimesPage />} />
          <Route path="habit" element={<TimesPage />} />
          <Route path="goal" element={<TimesPage />} />
        </Route>
        <Route path="timedata/:id" element={<TimeData />} />
        <Route path="auth">
          <Route path="login" element={<AuthPage />} />
          <Route path="register" element={<AuthPage />} />
          <Route path="teacher" element={<TeacherForm />} />
        </Route>
        <Route path="myinfo">
          <Route path="myplan/:id" element={<InfoPage />} />
          <Route path="myplan/:id/:id" element={<TimeData />} />
          <Route path="profile/:id" element={<InfoPage />} />
        </Route>
        <Route path="st" element={<StList />} />
        <Route path="menu" element={<StMenu />} />
        <Route path="management" element={<ManagementPage />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
