import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { host } from "src/LinkHost";

import * as S from "./styled";

export const ShowMyPlan = () => {
  let { id } = useParams(); // 재할당 가능
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([
    {
      id: 0,
      user_id: "",
      kor: 0,
      createdAt: "",
    },
  ]);

  //10번 유저의 3번데이터 즉 :id/:id느낌으로 가야할듯 이게 되나?
  //아니면 잔쩌 비효율적이게 한 페이지를 또 만들어서 해보자 내일
  useEffect(() => {
    axios
      .get(`http://${host}:8080/todaytimes/byuserId/${id}`)
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
    <S.AllContainer>
      <S.Slider>
        <S.TotalContainer>
          <S.DayContainer>
            {listOfPosts.map((value: any, key: any) => {
              console.log(value.id);
              return (
                <div key={key}>
                  <S.DayTime
                    onClick={() => {
                      navigate(`/myinfo/myplan/${value.user_id}/${value.id}`); //이 경로에다가 그래프 띄우는거 하나 만들어놓고 그래프로 들어가는건 그냥 따로해서 눌러서 들어가야할 것 같당.
                    }} // 나중에 오늘 할 일이에요! 이런식으로 어제 쓴 선생님의 말을 볼 수  있게 할 수 있겠음. 그럼 하루하루 다르니까
                  >
                    {value.createdAt.slice(5, 10)}
                  </S.DayTime>
                </div>
              );
            })}
          </S.DayContainer>
        </S.TotalContainer>
      </S.Slider>
    </S.AllContainer>
  );
};
