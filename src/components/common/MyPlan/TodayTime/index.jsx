import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components";

import * as S from "./styled";

export const TodayTime = () => {
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
      .post("http://localhost:8080/todaytimes", data, {
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
