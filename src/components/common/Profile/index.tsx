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
  const [timeData, setTimeData] = useState([
    {
      kor: 0,
      eng: 0,
      math: 0,
      sci: 0,
      com: 0,
      kh: 0,
      study: 0,
    },
  ]);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/api/data/${id}`)
      .then((response) => {
        setTimeData(response.data);
      });
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
  let sum = 0;
  for (let i = 0; i < timeData.length; i++) {
    console.log(timeData[i].kor);
    sum += timeData[i].kor;
    sum += timeData[i].eng;
    sum += timeData[i].math;
    sum += timeData[i].sci;
    sum += timeData[i].com;
    sum += timeData[i].kh;
    sum += timeData[i].study;
  }
  let t = "";
  if (sum < 50) {
    t = "브론즈";
  }
  return (
    <>
      <S.Container>
        <S.ProfileName>{authState.user_name}</S.ProfileName>
        <S.SumTime>현재까지 누적 공부시간: {sum}시간</S.SumTime>
        <S.SumTime>티어: {t}</S.SumTime>
      </S.Container>
    </>
  );
};
