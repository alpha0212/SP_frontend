import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import { host } from "src/LinkHost";
import { Button } from "src/components/common";
import * as Yup from "yup";
import axios from "axios";
import * as S from "./styled";

export interface RegisterFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RegisterForm = React.forwardRef<
  HTMLInputElement,
  RegisterFormInputProps
>(({ autoComplete, placeholder, type, name }, ref) => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked(!checked);
  };
  let initialValues = {
    user_name: "",
    user_id: "",
    user_pw: "",
    user_agree: "checked",
  };
  const valueInsert = () => {
    setChecked(true);
  };
  console.log(initialValues.user_agree);
  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(),
    user_id: Yup.string().required(),
    user_pw: Yup.string().required(),
    user_agree: Yup.string().required(),
  });
  const onSubmit = (data: any) => {
    axios.post(`http://${host}:8080/auth`, data).then(() => {
      console.log(data);
      navigate("/auth/login");
    });
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인되어 있습니다.");
    }
  }, []);
  const enableButton = checked === true ? true : false;
  return (
    <S.FormInputContainer ref={ref}>
      <S.InputElementContainer>
        <S.InputContainer>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form>
              <S.Label>이름</S.Label>
              <S.InputElement autoComplete="off" name="user_name" />
              <S.Label>아이디</S.Label>
              <S.InputElement type="text" autoComplete="off" name="user_id" />
              <S.Label>비밀번호</S.Label>
              <S.InputElement
                autoComplete="off"
                name="user_pw"
                type="password"
              />
              <S.AgreeCheck
                type="checkbox"
                id="user_agree"
                name="user_agree"
                onClick={valueInsert}
                onChange={checkHandler}
              />
              개인정보 수집 및 이용 동의<strong>(필수)</strong>
              <Button
                disabled={enableButton}
                style={{
                  backgroundColor: enableButton === true ? "black" : "#afafaf",
                }}
                type="submit"
              >
                회원가입
              </Button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputElementContainer>
    </S.FormInputContainer>
  );
});
