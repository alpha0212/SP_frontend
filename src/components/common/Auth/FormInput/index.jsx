import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/helper/AuthContext";
import { Button } from "src/components/common";
import * as S from "./styled";

export const FormInput = () => {
  const [user_id, setUserid] = useState("");
  const [user_pw, setUserpw] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const navigate = useNavigate();

  const login = () => {
    const data = { user_id: user_id, user_pw: user_pw };
    axios.post("http://localhost:8080/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/");
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          user_id: response.data.user_id,
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
  return (
    <>
      <S.FormInputContainer>
        <S.InputElementContainer>
          <S.InputContainer>
            <S.InputElement
              type="text"
              onChange={(event) => {
                setUserid(event.target.value);
              }}
              placeholder="id"
            />
            <S.InputElement
              type="password"
              onChange={(event) => {
                setUserpw(event.target.value);
              }}
              placeholder="pw"
            />
            <Button onClick={login}>로그인</Button>
          </S.InputContainer>
        </S.InputElementContainer>
      </S.FormInputContainer>
      <S.ChooseMenu>
        <S.Choose to="/auth/teacher">
          <S.goTeacher>선생님</S.goTeacher>로그인
        </S.Choose>
        |<S.Choose to="#">비밀번호 변경</S.Choose>
      </S.ChooseMenu>
    </>
  );
};
