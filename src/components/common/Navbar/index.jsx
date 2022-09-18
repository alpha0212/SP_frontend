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
  const TeacherList = "NvNXPf8d";
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ user_name: "", status: false });
    setTeaState({ t_job: "", status: false });
  };
  console.log(teaState.t_job);

  return (
    <>
      <S.NavbarContainer>
        <AuthContext.Provider
          value={{ authState, setAuthState, teaState, setTeaState }}
        >
          <S.NavbarFormGroup>
            {!authState.status ? (
              <>
                <S.NavbarA to="auth/login">로그인</S.NavbarA>
                <S.NavbarA to="auth/register">회원가입</S.NavbarA>
              </>
            ) : (
              <>
                {teaState.t_job === "teacher" ? (
                  <></>
                ) : (
                  <S.NavbarA to="time/mytime">My시간</S.NavbarA>
                )}
                {authState.user_name === TeacherList ? (
                  <></>
                ) : (
                  <Link
                    style={{ textDecoration: "none", marginRight: "2vw" }}
                    to={`/profile/${authState.id}`}
                  >
                    <div style={{ color: "black" }}>{authState.user_name}</div>
                  </Link>
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
            {authState.status && <S.Logout onClick={logout}>Logout</S.Logout>}
          </S.NavbarFormGroup>
        </AuthContext.Provider>
      </S.NavbarContainer>
    </>
  );
};
