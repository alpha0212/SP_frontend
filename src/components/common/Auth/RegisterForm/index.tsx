import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import * as S from "./styled";

export interface RegisterFormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
export const RegisterForm = React.forwardRef<
  HTMLInputElement,
  RegisterFormInputProps
>(({ autoComplete, placeholder, type, name }, ref) => {
  const initialValues = {
    user_name: "",
    user_id: "",
    user_pw: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(),
    user_id: Yup.string().required(),
    user_pw: Yup.string().required(),
  });

  const onSubmit = (data: any) => {
    axios.post("http://localhost:8080/auth", data).then(() => {
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
  return (
    <S.FormInputContainer ref={ref}>
      <S.InputElementContainer>
        <S.InputContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <Field autoComplete="off" name="user_id" placeholder="이름" />
              <Field
                type="text"
                autoComplete="off"
                name="user_name"
                placeholder="id"
              />
              <Field
                autoComplete="off"
                name="user_pw"
                placeholder="pw"
                type="password"
              />

              <button type="submit">회원가입</button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputElementContainer>
    </S.FormInputContainer>
  );
});
