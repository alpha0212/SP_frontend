import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Header } from "src/components/";

import * as S from "./styled";

export const Profile = () => {
  let { id } = useParams(); // 재할당 가능
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [listOfGoals, setListOfGoals] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/byuserId/${id}`)
      .then((response) => {
        setListOfPosts(response.data);
      });
    axios
      .get(`http://localhost:8080/mygoal/byuserId/${id}`)
      .then((response) => {
        setListOfGoals(response.data);
      });

    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해주세요.");
    }
  }, []);

  return (
    <>
      <Header value="내정보" />
      <S.TotalContainer>
        {listOfGoals.map((value, key) => {
          return (
            <S.DayContainer key={key}>
              <S.DayTime
                onClick={() => {
                  navigate(`/timedata/${value.id}`);
                }}
              >
                날짜: {value.createdAt.slice(0, 10)}
              </S.DayTime>
            </S.DayContainer>
          );
        })}
      </S.TotalContainer>
    </>
  );
};
