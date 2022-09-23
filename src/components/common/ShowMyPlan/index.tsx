import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "./styled";

export const ShowMyPlan = () => {
  let { id } = useParams(); // 재할당 가능
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([
    {
      createdAt: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/byuserId/${id}`)
      .then((response) => {
        setListOfPosts(response.data);
      });

    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인되어있나요?🤔");
    }
  }, []);
  console.log(listOfPosts);
  return (
    <>
      <S.Slider>
        <S.TotalContainer>
          <S.DayContainer>
            {listOfPosts.map((value: any, key: any) => {
              return (
                <div key={key}>
                  <S.DayTime
                    onClick={() => {
                      navigate(`/timedata/${value.id}`);
                    }}
                  >
                    {value.createdAt.slice(5, 10)}
                  </S.DayTime>
                </div>
              );
            })}
          </S.DayContainer>
        </S.TotalContainer>
      </S.Slider>
    </>
  );
};
