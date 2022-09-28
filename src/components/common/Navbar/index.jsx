import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "src/helper/AuthContext";

import * as S from "./styled";

export const Navbar = () => {
  const [authState, setAuthState] = useState({
    user_name: "",
    id: "",
    status: false,
  });

  const [teaState, setTeaState] = useState({
    t_job: "",
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
          setTeaState({ ...teaState, status: false });
        } else {
          setAuthState({
            user_name: response.data.user_name,
            id: response.data.id,
            status: true,
          });
          setTeaState({
            t_job: response.data.t_job,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ user_name: "", status: false });
    setTeaState({ t_job: "", status: false });
  };

  return (
    <>
      <S.NavbarContainer>
        <S.NavbarFormGroup>
          {!authState.status ? (
            <>
              <S.NavbarA to="auth/login">로그인&nbsp;|</S.NavbarA>
              <S.NavbarA to="auth/register">&nbsp;회원가입</S.NavbarA>
            </>
          ) : (
            <>
              {teaState.t_job === "teacher" ? (
                <></>
              ) : (
                <div
                  style={{
                    color: "black",
                    paddingTop: "0.5rem",
                    fontSize: "2rem",
                    marginRight: "0.3rem",
                  }}
                >
                  {authState.user_name}
                </div>
              )}
              {teaState.t_job === "teacher" ? (
                <S.NavbarA to="st/list">
                  <S.TextSet>학생관리</S.TextSet>
                </S.NavbarA>
              ) : (
                <></>
              )}
            </>
          )}
          {authState.status && <S.Logout onClick={logout}>로그아웃</S.Logout>}
        </S.NavbarFormGroup>
      </S.NavbarContainer>
    </>
  );
};
