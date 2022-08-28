import axios from "axios";
import React, { useEffect, useState, createContext, useCallback } from "react";
import { AuthContext } from "src/helper/AuthContext";
import { Button } from "../Button";

import * as S from "./styled";

export const Navbar = () => {
const [authState, setAuthState] = useState({
  user_id: "",
  id: 0,
  status: false,
});

useEffect(() => {
  axios.get("http://localhost:8000/auth/auth", {
    headers: {
      accessToken: localStorage.getItem("accessToken"),
    },
  })
  .then((response) => {
    if(response.data.error) {
      setAuthState({ ...authState, status: false});
    } else {
      setAuthState({
        user_id: response.data.user_id,
        id: response.data.id,
        status: true,
      });
    }
  });
}, []);

const logout = () => {
  localStorage.removeItem("accessToken");
  setAuthState({ user_id: "", id: 0, status: false});
}

  return (
    <>
      <S.NavbarContainer>
        <AuthContext.Provider value={{authState, setAuthState}}>
          <S.NavbarFormGroup>
                {!authState.status ? (
                  <>
                    <S.NavbarA to="auth/login">로그인</S.NavbarA>
                    <S.NavbarA to="auth/register">회원가입</S.NavbarA>
                  </>
                ) : (
                  <>
                    <S.NavbarA to="time/mytime">My시간</S.NavbarA>  
                  </>
                )}
                <h1>{authState.user_name}</h1>
                {authState.status && <button onClick={logout}>Logout</button>}
          </S.NavbarFormGroup>
        </AuthContext.Provider>
      </S.NavbarContainer>
    </>
  );
};
