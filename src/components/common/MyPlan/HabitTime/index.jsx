import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as S from "./styled";

export const HabitTime = () => {
  const navigate = useNavigate();
  const initialValues = {
    morning: "",
    night: "",
    sleep: "",
    break: "",
  };
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/auth/login");
      alert("로그인해야 이용 가능한 서비스입니다.");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    morning: Yup.string().required("기상시간"),
    night: Yup.string().required("취침시간"),
    sleep: Yup.string().required("낮잠"),
    break: Yup.string().required("휴식"),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/myhabit", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        navigate("/time/goal");
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
              <label>기상시간H</label>
              <Field autoComplete="off" name="morning" />
              <label>취침시간H</label>
              <Field autoComplete="off" name="night" />
              <label>낮잠시간H</label>
              <Field autoComplete="off" name="sleep" />
              <label>휴식시간H</label>
              <Field autoComplete="off" name="break" />
              <button type="submit">제출</button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputTimeContainer>
    </>
  );
};
