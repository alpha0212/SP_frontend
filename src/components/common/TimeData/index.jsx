import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bar } from "react-chartjs-2";

import { Horizontal, HorizontalContainer } from "../MyTime/styled";
import * as S from "./styled";

export const TimeData = () => {
  let { id } = useParams();
  const [timeData, setTimeData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/byId/${id}`)
      .then((res) => setTimeData(res.data));
  }, []);
  console.log(timeData, "어 ㅎㅇ");

  const SubData = [
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
  ];
  const updatePlot = SubData;
  console.log(updatePlot, "플록");
  if (SubData[1].time === undefined) {
    console.log("도대체 왜 언디파인인건데");
  }
  console.log(SubData);
  const [time, setTime] = useState({
    labels: SubData.map((val) => val.sub),
    datasets: [
      {
        label: "시간데이터",
        data: SubData.map((data) => data.time),
        backgroundColor: [
          "#f4f0e6",
          "#d9d9f3",
          "#ceefe4",
          "#9dd3a8",
          "#96ceb4",
          "#ffeead",
          "#d9534f",
          "#ffad60",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <S.TimeDataContainer>
      <S.TimeTextContainer>
        <S.TimeText>🗓 {timeData.createdAt}</S.TimeText>
      </S.TimeTextContainer>
      <HorizontalContainer>
        <Horizontal />
      </HorizontalContainer>
      <S.TImeDataBoxContainer>
        <S.TimeDataBox>
          <S.TimeDataText>국어: {timeData.kor}시간</S.TimeDataText>
          <S.TimeDataText>영어: {timeData.eng}시간</S.TimeDataText>
          <S.TimeDataText>수학: {timeData.math}시간</S.TimeDataText>
          <S.TimeDataText>과학: {timeData.sci}시간</S.TimeDataText>
          <S.TimeDataText>사회: {timeData.com}시간</S.TimeDataText>
          <S.TimeDataText>한국사: {timeData.kh}시간</S.TimeDataText>
          <S.TimeDataText>일반공부: {timeData.study}시간</S.TimeDataText>
          {SubData[1] === undefined ? (
            <Bar data={time} />
          ) : (
            <div style={{ fontSize: "10rem" }}>아 널이야!!!</div>
          )}
        </S.TimeDataBox>
      </S.TImeDataBoxContainer>
    </S.TimeDataContainer>
  );
};
