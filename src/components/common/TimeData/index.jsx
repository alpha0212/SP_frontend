import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Horizontal, HorizontalContainer } from "../MyTime/styled";

import * as S from "./styled";
import { BarGraph, CircleGraph, LineGraph } from "../GraphList";
import { host } from "src/LinkHost";

export const TimeData = () => {
  let { id } = useParams();
  const [timeData, setTimeData] = useState({});
  const [habitData, setHabitData] = useState({});
  const [goalData, setGoalData] = useState({});
  const [authState, setAuthState] = useState({
    id: 0,
    user_id: "",
    status: false,
  });
  const [teaState, setTeaState] = useState({
    status: false,
  });
  const [listOfPosts, setListOfPosts] = useState({
    createdAt: "",
  });
  const lifeStyleAm = useMemo(() => [
    {
      id: 1,
      habitAm: "기상시간AM",
      habitTimeAm: habitData.morningAm,
    },
    {
      id: 2,
      habitAm: "취침시간AM",
      habitTimeAm: habitData.nightAm,
    },
  ]);
  const lifeStylePm = useMemo(
    () => [
      {
        id: 1,
        habit: "기상시간PM",
        habitTime: habitData.morning,
      },
      {
        id: 2,
        habit: "취침시간PM",
        habitTime: habitData.night,
      },
      {
        id: 3,
        habit: "낮잠시간H",
        habitTime: habitData.sleep,
      },
      {
        id: 4,
        habit: "휴식시간H",
        habitTime: habitData.break,
      },
    ],
    [habitData]
  );
  const goalInfo = useMemo(
    () => [
      {
        id: 1,
        goal: "목표기상시간AM",
        goalTime: goalData.GoalMorning,
      },
      {
        id: 2,
        goal: "목표취침시간PM",
        goalTime: goalData.GoalNight,
      },
    ],
    [goalData]
  );
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
  const goalGraphData = useMemo(
    () => ({
      labels: goalInfo.map((val) => val.goal),
      datasets: [
        {
          label: "시간데이터",
          data: goalInfo.map((val) => val.goalTime),
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
    [goalInfo]
  );
  const lifeStyleData = useMemo(
    () => ({
      labels: ["기상시간", "취침시간", "낮잠시간", "휴식시간"],

      datasets: [
        {
          label: "오전 시간데이터",
          data: lifeStyleAm.map((val) => val.habitTimeAm),
          backgroundColor: ["rgb(88, 104, 252, 0.2)"],
          borderColor: ["rgb(88, 104, 252)"],
        },
        {
          label: "오후 시간데이터",
          data: lifeStylePm.map((val) => val.habitTime),
          backgroundColor: ["rgb(77, 67, 69, 0.2)"],
          borderColor: ["rgb(77, 67, 69)"],
        },
      ],
    }),
    [lifeStylePm, lifeStyleAm]
  );
  const time = useMemo(
    () => ({
      labels: subData.map((val) => val.sub),
      datasets: [
        // 데이터셋으로 하나씩 만들면 됨 그래서 데이터 셋 안에 내용을 7개만들면 댐
        {
          label: "국어",
          borderRadius: 10,
          data: subData.map((val) => val.time), //좀 불편하긴 한데 그냥 하나 하나 만들어야 할 거 같기도 하고
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
        {},
      ],
    }),
    [subData]
  );

  useEffect(() => {
    axios
      .get(`http://${host}:8080/auth/auth`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, status: false });
          setTeaState({ ...teaState, status: false });
        } else {
          setAuthState({
            id: res.data.id,
            user_id: res.data.user_id,
            status: true,
          });
          setTeaState({
            status: true,
          });
        }
      });
    axios.get(`http://${host}:8080/myhabit/byId/${id}`).then((res) => {
      setHabitData(res.data);
    });
    axios.get(`http://${host}:8080/mygoal/byId/${id}`).then((res) => {
      setGoalData(res.data);
    });
    axios.get(`http://${host}:8080/todaytimes/byId/${id}`).then((res) => {
      setListOfPosts(res.data);
      setTimeData(res.data);
    });
  }, []);
  console.log(authState.user_id, "다르자나");
  console.log(listOfPosts.user_id, "개세야");
  return (
    <>
      <S.TimeDataContainer>
        <S.BackSpaceContainer>
          <S.BackSpace to={`/myinfo/myplan/${authState.user_id}`}>
            &lt;-
          </S.BackSpace>
        </S.BackSpaceContainer>
        <S.TimeTextContainer>
          <S.TimeText>
            {listOfPosts.user_id}
            {listOfPosts.createdAt.slice(5, 7)}월{" "}
            {listOfPosts.createdAt.slice(8, 10)}일 데이터
          </S.TimeText>
        </S.TimeTextContainer>
        <S.TitleContainer style={{ marginTop: "8rem" }}>
          <S.TitleText>공부시간</S.TitleText>
        </S.TitleContainer>
        <HorizontalContainer>
          <Horizontal />
        </HorizontalContainer>
        {authState.user_id === listOfPosts.user_id || teaState === true ? (
          <S.TimeDataBoxContainer>
            <S.GraphSize2>
              <BarGraph chartData={time} />
            </S.GraphSize2>
            <S.TitleContainer style={{ marginTop: "8rem" }}>
              <S.TitleText>생활습관</S.TitleText>
            </S.TitleContainer>
            <HorizontalContainer>
              <Horizontal />
            </HorizontalContainer>
            <S.GraphSize2>
              <LineGraph chartData={lifeStyleData} />
            </S.GraphSize2>
            <S.TitleContainer style={{ marginTop: "8rem" }}>
              <S.TitleText>습관목표</S.TitleText>
            </S.TitleContainer>
            <HorizontalContainer>
              <Horizontal />
            </HorizontalContainer>
            <S.GraphSize>
              <CircleGraph
                style={{ height: "60%" }}
                chartData={goalGraphData}
              />
            </S.GraphSize>
          </S.TimeDataBoxContainer>
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              fontSize: "2rem",
            }}
          >
            다른 학생의 데이터에 접근했어요🤔
          </div>
        )}
      </S.TimeDataContainer>
    </>
  );
};
