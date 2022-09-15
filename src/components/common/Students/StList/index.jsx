import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export const StList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("선생님 전용 아이디 코드로 로그인 해야 이용가능합니다.");
    } else {
      axios
        .get("http://13.125.182.60:8080/auth", {
          //일반 유저의 데이터를 가져오는 게 아닌 시간데이터를 올린 유저만 이름을 가지고 온다.
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfUsers(response.data.listOfUsers);
        });
    }
  }, []);
  return (
    <S.Container>
      <S.ListContainer>
        {listOfUsers.map((value, key) => {
          if (value === null) {
            return <S.StText>아무도 제출하지 않았습니다.</S.StText>;
          } else {
            return (
              <S.List key={key}>
                <S.StName to={`/profile/${value.id}`}>
                  <S.StText>{value.user_id}</S.StText>
                </S.StName>
              </S.List>
            );
          }
        })}
      </S.ListContainer>
    </S.Container>
  );
};
