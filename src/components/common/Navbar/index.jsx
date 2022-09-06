import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthContext } from "src/helper/AuthContext";

import * as S from "./styled";

export const Navbar = () => {
  const [authState, setAuthState] = useState({
    user_name: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            user_name: response.data.user_id,
            status: true,
          });
        }
      });
  }, []);
  const TeacherList = "NvNXPf8d";
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ user_name: "", status: false });
  };

  return (
    <>
      <S.NavbarContainer>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <S.NavbarFormGroup>
                {!authState.status ? (
                  <>
                    <S.NavbarA to="auth/login">로그인</S.NavbarA>
                    <S.NavbarA to="auth/register">회원가입</S.NavbarA>
                  </>
                ) : (
                  <>
                    {authState.user_name === TeacherList ? <></> : <S.NavbarA to="time/mytime">My시간</S.NavbarA>}
                    {authState.user_name === TeacherList ? <></> : <div style={{color: "black"}}>{authState.user_name}</div>}
                    {authState.user_name === TeacherList ? <S.NavbarA to="st/list"><S.TextSet>학생관리</S.TextSet></S.NavbarA> : <></>}
                  </>
                )}
                {authState.status && <S.Logout onClick={logout}>Logout</S.Logout>}
          </S.NavbarFormGroup>
        </AuthContext.Provider>
      </S.NavbarContainer>
    </>
  );
};
