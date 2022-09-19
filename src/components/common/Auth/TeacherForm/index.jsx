import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/helper/AuthContext";
import { Button } from "src/components/common";
import * as S from "./styled";

export const TeacherForm = () => {
  const [t_id, setTid] = useState("");
  const [t_pw, setTpw] = useState("");
  const [t_job, setTjob] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const data = { t_id: t_id, t_pw: t_pw, t_job: t_job };
    axios.post("http://localhost:8080/teacher/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/");
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          t_id: response.data.t_id,
          t_job: response.data.t_job,
          id: response.data.id,
          status: false,
        });
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인되었습니다.");
    }
  }, []);
  const enableButton = t_job === "teacher" ? false : true;
  return (
    <>
      <S.FormInputContainer>
        <S.TitleContainer>
          <S.Title>선생님 로그인</S.Title>
        </S.TitleContainer>
        <S.InputElementContainer>
          <S.InputContainer>
            <S.empty />
            <S.InputElement
              type="text"
              onChange={(event) => {
                setTid(event.target.value);
              }}
              placeholder="아이디"
            />
            <S.InputElement
              type="password"
              onChange={(event) => {
                setTpw(event.target.value);
              }}
              placeholder="비밀번호"
            />
            <S.LabelContainer>
              <S.Label>아래에</S.Label>
              <S.teacher>‘teacher’</S.teacher>
              <S.Label>을 입력해주세요.</S.Label>
            </S.LabelContainer>
            <S.InputElement
              type="text"
              onChange={(event) => {
                setTjob(event.target.value);
              }}
            />
          </S.InputContainer>
          <S.ButtonContainer>
            <Button
              disabled={enableButton}
              style={{
                backgroundColor: enableButton === true ? "#afafaf" : "black",
              }}
              onClick={login}
            >
              로그인
            </Button>
          </S.ButtonContainer>
        </S.InputElementContainer>
      </S.FormInputContainer>
    </>
  );
};
