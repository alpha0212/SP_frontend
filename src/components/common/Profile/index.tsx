import React, { useState } from "react";
import { useEffect } from "react";
import { host } from "src/LinkHost";

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
  const [listOfUsers, setListOfUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://${host}:8080/auth`).then((res) => {
      setListOfUsers(res.data);
    });
    axios
      .get(`http://${host}:8080/todaytimes/api/data/${id}`)
      .then((response) => {
        setTimeData(response.data);
      });
    axios
      .get(`http://${host}:8080/auth/auth`, {
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
  let sum: number = 0;
  for (let i = 0; i < timeData.length; i++) {
    sum += timeData[i].kor;
    sum += timeData[i].eng;
    sum += timeData[i].math;
    sum += timeData[i].sci;
    sum += timeData[i].com;
    sum += timeData[i].kh;
    sum += timeData[i].study;
  }
  let avg: number = 0; //소수점 버리기
  let t = "공부시간 1등이에요!";
  if (sum < 50) {
    t = "좀 더 화이팅!";
  }
  if (sum > 1) {
    avg = Math.floor(sum / timeData.length);
  }
  return (
    <>
      <S.Container>
        <S.ProfileName>{authState.user_name} 학생</S.ProfileName>
        <S.HorizontalContainer>
          <S.Horizontal />
        </S.HorizontalContainer>
        <S.SumTime>현재까지 누적 공부시간: {sum}시간</S.SumTime>
        <S.SumTime>하루평균 공부시간: {avg}시간</S.SumTime>
        <S.SumTime>
          🏆순위: {listOfUsers.length}명의 학생중 &nbsp;{t}
        </S.SumTime>
      </S.Container>
    </>
  );
};
