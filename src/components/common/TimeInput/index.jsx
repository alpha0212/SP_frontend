import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "src/helper/AuthContext";

import * as S from "./styled";

export const TimeInput = () => {
  const { authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues = {
    kor: "",
    eng: "",
    math: "",
    sci: "",
    com: "",
    kh: "",
    study: "",
  };
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해야 이용 가능한 서비스입니다.");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    kor: Yup.string().required("국어"),
    eng: Yup.string().required("영어"),
    math: Yup.string().required("수학"),
    sci: Yup.string().required("과학"),
    com: Yup.string().required("사회"),
    kh: Yup.string().required("한국사"),
    study: Yup.string().required("일반공부"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://52.79.235.48:8080/todaytimes", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        alert("오늘도 수고했어요!😀");
        navigate("/");
      });
  };
  return (
    <>
      <S.InputTimeContainer>
        <S.InputContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <label>국어</label>
              <Field autoComplete="off" name="kor" />
              <label>영어</label>
              <Field autoComplete="off" name="eng" />
              <label>수학</label>
              <Field autoComplete="off" name="math" />
              <label>과학</label>
              <Field autoComplete="off" name="sci" />
              <label>사회</label>
              <Field autoComplete="off" name="com" />
              <label>한국사</label>
              <Field autoComplete="off" name="kh" />
              <label>일반공부</label>
              <Field autoComplete="off" name="study" />
              <button type="submit">제출</button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputTimeContainer>
    </>
  );
};
