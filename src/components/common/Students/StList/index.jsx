import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Horizontal,
  HorizontalContainer,
} from "src/components/common/MyTime/styled";

import * as S from "./styled";

export const StList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("선생님 전용 아이디 코드로 로그인 해야 이용가능합니다.");
    } else {
      axios
        .get("http://52.79.235.48:8080/auth", {
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
      <S.SearchContainer>
        <S.Search>
          <S.SearchInput
            type="text"
            placeholder="학생 검색"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </S.Search>
      </S.SearchContainer>
      <HorizontalContainer>
        <Horizontal />
      </HorizontalContainer>
      <S.ListContainer>
        {listOfUsers
          .filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (
              value.user_id.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((value, key) => {
            return (
              <S.List key={key}>
                <S.StName to={`/profile/${value.id}`}>
                  <S.StText>{value.user_id}</S.StText>
                </S.StName>
              </S.List>
            );
          })}
      </S.ListContainer>
    </S.Container>
  );
};
