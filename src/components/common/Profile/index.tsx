import React, { useState, useMemo } from "react";
import { useEffect } from "react";

import * as S from "./styled";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export const ProFile = () => {
  let { id } = useParams();
  const [authState, setAuthState] = useState({
    user_name: "",
    status: false,
  });
  const [timeData, setTimeData] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken") as any,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            user_name: response.data.user_name,
            status: true,
          });
        }
      });
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해주세요.😎");
    }
  }, []);
  return (
    <>
      <S.Container>
        <S.ProfileName>{authState.user_name}</S.ProfileName>
        <S.SumTime>총 공부시간:</S.SumTime>
      </S.Container>
    </>
  );
};
