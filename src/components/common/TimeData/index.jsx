import React, { useEffect, useState, useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import { Horizontal, HorizontalContainer } from "../MyTime/styled";

import * as S from "./styled";

export const TimeData = () => {
  let { id } = useParams();
  const [timeData, setTimeData] = useState({});

  const subData = useMemo(
    () => [
      {
        id: 1,
        sub: "국어",
        time: timeData.kor,
      },
      {
        id: 2,
        sub: "영어",
        time: timeData.eng,
      },
      {
        id: 3,
        sub: "수학",
        time: timeData.math,
      },
      {
        id: 4,
        sub: "과학",
        time: timeData.sci,
      },
      {
        id: 5,
        sub: "사회",
        time: timeData.com,
      },
      {
        id: 6,
        sub: "한국사",
        time: timeData.kh,
      },
      {
        id: 7,
        sub: "공부",
        time: timeData.study,
      },
    ],
    [timeData]
  );

  const time = useMemo(
    () => ({
      labels: subData.map((val) => val.sub),
      datasets: [
        {
          label: "시간데이터",
          data: subData.map((val) => val.time),
          plugins: {
            deferred: {
              xOffset: 150,
              yOffset: "50%",
              delay: 500,
            },
          },
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(84, 221, 154, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(84, 221, 154)",
          ],
          borderWidth: 1,
        },
      ],
    }),
    [subData]
  );

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/byId/${id}`)
      .then((res) => setTimeData(res.data));
  }, []);

  return (
    <>
      <S.TimeDataContainer>
        <S.TimeTextContainer>
          <S.TimeText>🗓 {timeData.createdAt}</S.TimeText>
        </S.TimeTextContainer>
        <HorizontalContainer>
          <Horizontal />
        </HorizontalContainer>
        <S.TimeDataBoxContainer>
          <S.TimeDataBox>
            <S.TimeDataText>국어: {timeData.kor}시간</S.TimeDataText>
            <S.TimeDataText>영어: {timeData.eng}시간</S.TimeDataText>
            <S.TimeDataText>수학: {timeData.math}시간</S.TimeDataText>
            <S.TimeDataText>과학: {timeData.sci}시간</S.TimeDataText>
            <S.TimeDataText>사회: {timeData.com}시간</S.TimeDataText>
            <S.TimeDataText>한국사: {timeData.kh}시간</S.TimeDataText>
            <S.TimeDataText>일반공부: {timeData.study}시간</S.TimeDataText>
            <Bar data={time} />
          </S.TimeDataBox>
        </S.TimeDataBoxContainer>
      </S.TimeDataContainer>
    </>
  );
};
