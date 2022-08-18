import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import { Navbar, MyTime, TimeData, Habit } from "./components";
import { MainPage } from "./pages";
import { AuthPage } from "./pages/auth";

export const App: React.FC = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <Navbar />
          <div>
            <Outlet />
          </div>
        </>
      }
    >
      <Route index element={<MainPage />} />
      <Route path="time">
        <Route path="mytime" element={<MyTime />}>
          <Route path="habit" element={<Habit />} />
        </Route>
        <Route path="timedata" element={<TimeData />} />
      </Route>
      <Route path="auth">
        <Route path="login" element={<AuthPage />} />
        <Route path="register" element={<AuthPage />} />
      </Route>
    </Route>
  </Routes>
);
