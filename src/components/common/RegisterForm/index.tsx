import React from "react";
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
    user_email: "",
    user_id: "",
    user_pw: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required(),
    user_email: Yup.string().required(),
    user_id: Yup.string().required(),
    user_pw: Yup.string().required(),
  });

  const onSubmit = (data: any) => {
    axios.post("http://localhost:8080/auth", data).then(() => {
      console.log(data);
      navigate("/auth/login");
    });
  };

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
              <Field
                type="text"
                autoComplete="off"
                name="user_name"
                placeholder="이름"
              />
              <Field
                type="email"
                autoComplete="off"
                name="user_email"
                placeholder="email"
              />
              <Field autoComplete="off" name="user_id" placeholder="id" />
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
