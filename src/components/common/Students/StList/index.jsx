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
  const [teaState, setTeaState] = useState({
    t_job: "",
    status: false,
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("선생님 전용 아이디 코드로 로그인 해야 이용가능합니다.");
    } else {
      axios
        .get("http://localhost:8080/auth", {
          //일반 유저의 데이터를 가져오는 게 아닌 시간데이터를 올린 유저만 이름을 가지고 온다.
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfUsers(response.data.listOfUsers);
        });
      axios
        .get("http://localhost:8080/auth/auth", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          if (response.data.error) {
            setTeaState({ ...teaState, status: false });
          } else {
            setTeaState({
              t_job: response.data.t_job,
              status: true,
            });
          }
        });
    }
  }, []);
  return (
    <S.Container>
      {teaState.t_job === "teacher" ? (
        <>
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
                if (searchTerm === "") {
                  return value;
                } else if (
                  value.user_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((value, key) => {
                return (
                  <S.List key={key}>
                    <S.StName to={`/profile/${value.id}`}>
                      <S.StText>{value.user_name}</S.StText>
                    </S.StName>
                  </S.List>
                );
              })}
          </S.ListContainer>
        </>
      ) : (
        <S.Alert>*학생계정으로 로그인되어있습니다.*</S.Alert>
      )}
    </S.Container>
  );
};
