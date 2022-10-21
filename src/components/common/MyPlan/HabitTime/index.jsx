import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { host } from "src/LinkHost";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components";

import * as S from "./styled";

export const HabitTime = () => {
  const navigate = useNavigate();
  const initialValues = {
    morning: 0,
    morningAm: 0,
    night: 0,
    nightAm: 0,
    sleep: 0,
    break: 0,
  };
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인해야 이용 가능한 서비스입니다.");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    morning: Yup.number().required("기상시간PM"),
    morningAm: Yup.number().required("기상시간AM"),
    night: Yup.number().required("취침시간PM"),
    nightAm: Yup.number().required("취침시간AM"),
    sleep: Yup.number().required("낮잠"),
    break: Yup.number().required("휴식"),
  });

  const onSubmit = (data) => {
    axios
      .post(`http://${host}:8080/myhabit`, data, {
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
              <S.InputFlexContainer>
                <S.InputFlex>
                  <label>기상시간AM</label>
                  <S.InputTime autoComplete="off" name="morningAm" />
                </S.InputFlex>
                <S.InputFlex>
                  <label>기상시간PM</label>
                  <S.InputTime autoComplete="off" name="morning" />
                </S.InputFlex>
              </S.InputFlexContainer>
              <S.InputFlexContainer>
                <S.InputFlex>
                  <label>취침시간AM</label>
                  <S.InputTime autoComplete="off" name="nightAm" />
                </S.InputFlex>
                <S.InputFlex>
                  <label>취침시간PM</label>
                  <S.InputTime autoComplete="off" name="night" />
                </S.InputFlex>
              </S.InputFlexContainer>
              <S.MarginCenter>
                <label>낮잠시간H</label>
                <S.InputTime autoComplete="off" name="sleep" />
                <label>휴식시간H</label>
                <S.InputTime autoComplete="off" name="break" />
              </S.MarginCenter>
              <Button
                style={{ width: "13.5rem", margin: "auto" }}
                type="submit"
              >
                제출
              </Button>
            </Form>
          </Formik>
        </S.InputContainer>
      </S.InputTimeContainer>
    </>
  );
};
