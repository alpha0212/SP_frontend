import axios from "axios";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/common";
import { host } from "src/LinkHost";
import * as S from "./styled";

// assets
import LoginIconPNG from "src/assets/LoginIcon.png";
import PwIconPNG from "src/assets/PwIcon.png";

export const FormInput = () => {
  const [user_id, setUserid] = useState("");
  const [user_pw, setUserpw] = useState("");

  const navigate = useNavigate();

  const login = () => {
    const data = { user_id: user_id, user_pw: user_pw };
    axios.post(`http://${host}:8080/auth/login`, data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/");
        localStorage.setItem("accessToken", response.data.token);
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인되었습니다.");
    }
  }, []);
  const enableButton = user_pw === "" ? true : false;
  return (
    <>
      <S.FormInputContainer>
        <S.InputElementContainer>
          <S.InputContainer>
            <S.InputElementDiv>
              <S.InputElementDivContainer>
                <S.LogoContainer>
                  <S.LoginLogo src={LoginIconPNG} />
                </S.LogoContainer>
                <S.InputElement
                  type="text"
                  onChange={(event) => {
                    setUserid(event.target.value);
                  }}
                  placeholder="아이디"
                />
              </S.InputElementDivContainer>
            </S.InputElementDiv>
            <S.InputElementDiv>
              <S.InputElementDivContainer>
                <S.LogoContainer>
                  <S.LoginLogo src={PwIconPNG} />
                </S.LogoContainer>
                <S.InputElement
                  type="password"
                  onChange={(event) => {
                    setUserpw(event.target.value);
                  }}
                  placeholder="비밀번호"
                  value={user_pw}
                />
              </S.InputElementDivContainer>
            </S.InputElementDiv>
            <Button
              disabled={enableButton}
              style={{
                backgroundColor: enableButton === true ? "#afafaf" : "black",
              }}
              onClick={login}
            >
              로그인
            </Button>
            <S.ChooseMenu>
              <S.Choose to="/auth/teacher">
                <S.goTeacher>선생님</S.goTeacher>로그인
              </S.Choose>
              <S.verticalChoose>|</S.verticalChoose>
              <S.Choose to="/">Skyplanner</S.Choose>
            </S.ChooseMenu>
          </S.InputContainer>
        </S.InputElementContainer>
      </S.FormInputContainer>
    </>
  );
};
