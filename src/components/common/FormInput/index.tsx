import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/helper/AuthContext";
import * as S from "./styled";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ placeholder, type, name }, ref) => {
    const [user_id, setUserid] = useState("");
    const [user_pw, setUserpw] = useState("");
    const { setAuthState } = useContext(AuthContext);

    let navigate = useNavigate();

    const login = () => {
      const data = { userid: user_id, user_pw: user_pw };
      axios.post("http://localhost:8000/auth/login", data).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          setAuthState({
            user_id: response.data.user_id,
            id: response.data.id,
            status: false,
          });
          navigate("/");
        }
      });
    };
    return (
      <S.FormInputContainer ref={ref}>
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
            <button onClick={login}>로그인</button>
          </S.InputContainer>
        </S.InputElementContainer>
      </S.FormInputContainer>
    );
  }
);
