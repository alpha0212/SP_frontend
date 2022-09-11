import React from "react";
import { Route, Routes } from "react-router-dom";

import { MyTime, TimeData, Habit, Profile } from "./components";
import { StList } from "src/components";
import { MainPage } from "./pages";
import { AuthPage } from "./pages/auth";
import { TeacherForm } from "src/components";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="time">
        <Route path="mytime" element={<MyTime />}>
          <Route path="habit" element={<Habit />} />
        </Route>
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
  );
};
