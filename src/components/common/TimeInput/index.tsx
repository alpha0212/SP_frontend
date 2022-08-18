import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import "./index.css";

import * as S from "./styled";

export const TimeInput = () => {
  let navigate = useNavigate();
  const initialValues = {
    kor: "",
    eng: "",
    math: "",
    sci: "",
    com: "",
    kh: "",
    study: "",
  };

  const validationSchema = Yup.object().shape({
    kor: Yup.string().required(),
    eng: Yup.string().required(),
    math: Yup.string().required(),
    sci: Yup.string().required(),
    com: Yup.string().required(),
    kh: Yup.string().required(),
    study: Yup.string().required(),
  });
  const [listOfTimes, setListOfTimes] = useState([]);
  const onSubmit = (data: any) => {
    axios.post("http://localhost:8000/todaytimes", data).then((response) => {
      navigate("/");
    });
  };
  return (
    <S.InputTimeContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <S.FormContainer>
          <Form>
            <label>국어:</label>
            <Field className="input-box" autoComplate="off" name="kor" />
            <label>영어:</label>
            <Field className="input-box" autoComplate="off" name="eng" />
            <label>수학:</label>
            <Field className="input-box" autoComplate="off" name="math" />
            <label>과학:</label>
            <Field className="input-box" autoComplate="off" name="sci" />
            <label>사회:</label>
            <Field className="input-box" autoComplate="off" name="com" />
            <label>한국사:</label>
            <Field className="input-box" autoComplate="off" name="kh" />
            <label>내신:</label>
            <Field className="input-box" autoComplate="off" name="study" />
            <button className="input-btn" type="submit">
              시간 보내기
            </button>
          </Form>
        </S.FormContainer>
      </Formik>
    </S.InputTimeContainer>
  );
};
