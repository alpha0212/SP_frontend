import React, { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./styled";

export const Intro = () => {
  const [authState, setAuthState] = useState({
    id: 0,
    user_id: "",
    status: false,
  });

  const [teaState, setTeaState] = useState({
    t_job: "",
    status: false,
  });
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/auth", {
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
            t_job: res.data.t_job,
            status: true,
          });
        }
      });
  }, [authState]);
  /**
   * authState를 디펜던시에 넣어 상태가 업데이트 될 때 한번 더 사용하여
   * "로그인해야 이용가능한 서비스입니다!" 라는 문장을 로그인 상태에 따라
   * 바꿔서 보여줄 수 있다.
   */
  return (
    <S.Background>
      <S.MainContainer>
        {!authState.status ? (
          <div style={{ textAlign: "center" }}>
            로그인해야 이용가능한 서비스입니다!
          </div>
        ) : (
          <></>
        )}
        <S.SectionContainer>
          <S.SectionOne>
            <S.TitleContainer>
              <S.SectionTitle to="/time/today">
                공부시간 적으러 가기
              </S.SectionTitle>
              <S.explainContainer>
                <S.explainBox>
                  오늘 자신의 일과를 적어주세요.
                  <br /> 학습관리에 도움이 됩니다🙂
                </S.explainBox>
              </S.explainContainer>
            </S.TitleContainer>
          </S.SectionOne>
        </S.SectionContainer>
        <S.SectionContainer>
          <S.SectionTwo>
            <S.TitleContainer>
              {authState.status === true ? (
                <S.SectionTitle to={`/myinfo/myplan/${authState.user_id}`}>
                  프로필
                </S.SectionTitle>
              ) : (
                <S.SectionTitle to={`/`}>프로필</S.SectionTitle>
              )}

              <S.explainContainer>
                <S.explainBox>
                  날짜별로 자신이 공부한 시간과
                  <br /> 총 공부량, 하루 평균 공부량을 <br />볼 수 있습니다.
                </S.explainBox>
              </S.explainContainer>
            </S.TitleContainer>
          </S.SectionTwo>
        </S.SectionContainer>
      </S.MainContainer>
    </S.Background>
  );
};
