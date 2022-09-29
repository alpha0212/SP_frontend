import React, { useState, useEffect } from "react";
import axios from "axios";
import { host } from "src/LinkHost";
import { useMediaQuery } from "react-responsive";

import * as S from "./styled";

export const Intro = () => {
  const isDeskTop = useMediaQuery({ minWidth: "50rem" });
  const [authState, setAuthState] = useState({
    id: 0,
    user_id: "",
    user_name: "",
    status: false,
  });

  const [teaState, setTeaState] = useState({
    t_job: "",
    status: false,
  });
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
            user_name: res.data.user_name,
            status: true,
          });
          setTeaState({
            t_job: res.data.t_job,
            status: true,
          });
        }
      });
  }, []);
  /**
   * authState를 디펜던시에 넣어 상태가 업데이트 될 때 한번 더 사용하여
   * "로그인해야 이용가능한 서비스입니다!" 라는 문장을 로그인 상태에 따라
   * 바꿔서 보여줄 수 있다.
   */
  const FuncLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      user_id: "",
      user_name: "",
      status: false,
    });
  };
  return (
    <S.Background>
      {!authState.status ? (
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          로그인해야 이용가능한 서비스입니다!
        </div>
      ) : (
        <></>
      )}
      <S.MainContainer>
        {!authState.status ? (
          <S.AuthContainer>
            <S.Flex>
              <S.auth>
                <S.AuthTitleLink to="/auth/login">로그인</S.AuthTitleLink>
              </S.auth>
              <S.auth>
                <S.AuthTitleLink to="/auth/register">회원가입</S.AuthTitleLink>
              </S.auth>
            </S.Flex>
          </S.AuthContainer>
        ) : (
          <S.AuthContainer>
            <S.Flex>
              <S.auth>
                <S.AuthTitle style={{ marginTop: "0.2rem" }}>
                  {authState.user_name}
                </S.AuthTitle>
              </S.auth>
              <S.Logout onClick={FuncLogout}>
                <S.AuthTitle>로그아웃</S.AuthTitle>
              </S.Logout>
            </S.Flex>
          </S.AuthContainer>
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
                {isDeskTop ? (
                  <S.explainBox>
                    날짜별로 자신이 공부한 시간과
                    <br /> 총 공부량, 하루 평균 공부량을 볼 수 있습니다.
                  </S.explainBox>
                ) : (
                  <S.explainBox>
                    날짜별로 자신이 공부한 시간과
                    <br /> 총 공부량, 하루 평균 공부량을 <br />볼 수 있습니다.
                  </S.explainBox>
                )}
              </S.explainContainer>
            </S.TitleContainer>
          </S.SectionTwo>
        </S.SectionContainer>
      </S.MainContainer>
    </S.Background>
  );
};
