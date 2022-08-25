import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import { Button } from "../Button";

import * as S from "./styled";

export const Navbar = () => {
  const [authState, setAuthState] = useState({
    user_name: "",
    id: 0,
    status: false,
  });
  const AuthContext = createContext({ authState, setAuthState });

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            user_name: response.data.user_name,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ user_name: "", id: 0, status: false });
  };

  return (
    <>
      <S.NavbarContainer>
        <S.NavbarFormGroup>
          <AuthContext.Provider value={{ authState, setAuthState }}>
            {authState && (
              <>
                <S.NavbarA to="time/mytime">My시간</S.NavbarA>
                <S.NavbarA to="auth/login">로그인</S.NavbarA>
                <S.NavbarA to="auth/register">회원가입</S.NavbarA>
              </>
            )}
          </AuthContext.Provider>
        </S.NavbarFormGroup>
      </S.NavbarContainer>
    </>
  );
};