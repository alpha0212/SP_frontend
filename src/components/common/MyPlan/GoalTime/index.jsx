import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export const GoalTime = () => {
  const navigate = useNavigate();
  const initialValues = {
    GoalMorning: "",
    GoalNight: "",
  };
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해야 이용 가능한 서비스입니다.");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    GoalMorning: Yup.string().required("목표기상시간"),
    GoalNight: Yup.string().required("목표취침시간"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/mygoal", data, {
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
              <label>목표기상시간H</label>
              <Field autoComplete="off" name="GoalMorning" />
              <label>목표취침시간H</label>
              <Field autoComplete="off" name="GoalNight" />
              <button type="submit">제출</button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputTimeContainer>
    </>
  );
};
