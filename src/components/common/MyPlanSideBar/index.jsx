import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "src/helper/AuthContext";
import * as S from "./styled";

export const MyPlanSideBar = () => {
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
  return (
    <S.MyTimeDataContainer>
      <S.MyPlanText>{authState.user_name} 님</S.MyPlanText>
        <S.SelectMy>
          <S.SelectMyList>
            <S.SelectMyListText to="">오늘의 공부</S.SelectMyListText>
          </S.SelectMyList>
          <S.SelectMyList>
            <S.SelectMyListText to="habit">습관 관리</S.SelectMyListText>
          </S.SelectMyList>
          <S.SelectMyList>
            <S.SelectMyListText to="mygoal">나의 목표</S.SelectMyListText>
          </S.SelectMyList>
        </S.SelectMy>
    </S.MyTimeDataContainer>
  );
};
