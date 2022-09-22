import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components";

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
              <S.InputTime autoComplete="off" name="GoalMorning" />
              <label>목표취침시간H</label>
              <S.InputTime autoComplete="off" name="GoalNight" />
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
