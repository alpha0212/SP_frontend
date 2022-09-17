import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "src/helper/AuthContext";
import { BarGraph } from "src/components";

import { Horizontal, HorizontalContainer } from "../MyTime/styled";
import * as S from "./styled";

export const TimeData = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [timeData, setDataOfTime] = useState([]);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://52.79.235.48:8080/todaytimes/byId/${id}`)
      .then((response) => {
        setDataOfTime(response.data);
      });
  }, []);
  console.log(timeData);

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
        </S.TimeDataBox>
      </S.TImeDataBoxContainer>
    </S.TimeDataContainer>
  );
};
