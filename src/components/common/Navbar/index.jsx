import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthContext } from "src/helper/AuthContext";

import * as S from "./styled";

export const Navbar = () => {
  const [authState, setAuthState] = useState({
    user_name: "",
    id: 0,
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
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <S.NavbarFormGroup>
                {!authState.status ? (
                  <>
                    <S.NavbarA to="auth/login">로그인</S.NavbarA>
                    <S.NavbarA to="auth/register">회원가입</S.NavbarA>
                  </>
                ) : (
                  <>
                    <S.NavbarA to="time/mytime">My시간</S.NavbarA>  
                    <div style={{color: "black"}}>{authState.user_name}</div>
                  </>
                )}
                {authState.status && <button onClick={logout}>Logout</button>}
          </S.NavbarFormGroup>
        </AuthContext.Provider>
      </S.NavbarContainer>
    </>
  );
};
