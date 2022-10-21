import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components";
import { host } from "src/LinkHost";

import * as S from "./styled";

export const TodayTime = () => {
  const navigate = useNavigate();
  const initialValues = {
    kor: 0,
    eng: 0,
    math: 0,
    sci: 0,
    com: 0,
    kh: 0,
    study: 0,
  };
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인해야 이용 가능한 서비스입니다.");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    kor: Yup.number().required("국어"),
    eng: Yup.number().required("영어"),
    math: Yup.number().required("수학"),
    sci: Yup.number().required("과학"),
    com: Yup.number().required("사회"),
    kh: Yup.number().required("한국사"),
    study: Yup.number().required("일반공부"),
  });
  const onSubmit = (data) => {
    axios
      .post(`http://${host}:8080/todaytimes`, data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        navigate("/time/habit");
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
              <S.InputTime autoComplete="off" name="kor" />
              <label>영어</label>
              <S.InputTime autoComplete="off" name="eng" />
              <label>수학</label>
              <S.InputTime autoComplete="off" name="math" />
              <label>과학</label>
              <S.InputTime autoComplete="off" name="sci" />
              <label>사회</label>
              <S.InputTime autoComplete="off" name="com" />
              <label>한국사</label>
              <S.InputTime autoComplete="off" name="kh" />
              <label>일반공부</label>
              <S.InputTime autoComplete="off" name="study" />
              <Button style={{ width: "13.5rem" }} type="submit">
                제출
              </Button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputTimeContainer>
    </>
  );
};
