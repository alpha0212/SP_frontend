import React, { useState, useEffect } from "react";
import * as S from "./styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface MyInfoTemplateProps {
  infoType: "myplan" | "profile";
  listToday: React.ReactNode;
  profile: React.ReactNode;
}

export const MyInfoTemplate: React.FC<MyInfoTemplateProps> = ({
  infoType,
  listToday,
  profile,
}) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState({ id: "", status: false });
  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken") as any,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            id: response.data.id,
            status: true,
          });
        }
      });
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해주세요!😅");
    }
  }, []);
  return (
    <>
      <S.ListOfMenu>
        <S.ListTypeContainer
          style={{
            paddingLeft: infoType === "profile" ? "4rem" : "0rem",
          }}
        >
          <S.MyPlanContainer infoType="myplan">
            <S.TodayStudy to={`/myinfo/myplan/${authState.id}`}>
              마이플랜
            </S.TodayStudy>
          </S.MyPlanContainer>
          <S.ProfileContainer infoType="profile">
            <S.TodayStudy to="/myinfo/profile">프로필</S.TodayStudy>
          </S.ProfileContainer>
        </S.ListTypeContainer>
      </S.ListOfMenu>
      <S.FlexContainer>
        {infoType === "myplan" ? listToday : <></>}
        {infoType === "profile" ? profile : <></>}
      </S.FlexContainer>
    </>
  );
};
