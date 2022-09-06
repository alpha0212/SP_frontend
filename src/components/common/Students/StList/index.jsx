import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export const StList = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("선생님 전용 아이디 코드로 로그인 해야 이용가능합니다.")
    } else {
      axios
        .get("http://localhost:8080/todaytimes", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfPosts(response.data.listOfPosts);
        });
    }
  }, []);
  return (
    <S.Container>
      <S.ListContainer>
        {listOfPosts.map((value, key) => {
          return (
        <S.List key={key}><S.StText>{value.user_id}</S.StText></S.List>
        );
      })}
      </S.ListContainer>
    </S.Container>
  );
};
