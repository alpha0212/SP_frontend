import axios from "axios";
import React, { useEffect, useState } from "react";
import { host } from "src/LinkHost";

import * as S from "./styled";

export const Navbar = () => {
  const [teaState, setTeaState] = useState({
    t_job: "",
    status: false,
  });

  useEffect(() => {
    axios
      .get(`http://${host}:8080/auth/auth`, {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setTeaState({ ...teaState, status: false });
        } else {
          setTeaState({
            t_job: response.data.t_job,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setTeaState({ t_job: "", status: false });
  };

  return (
    <>
      <S.NavbarContainer>
        <S.NavbarFormGroup>
          <S.Logo>Skyplanner</S.Logo>
        </S.NavbarFormGroup>
      </S.NavbarContainer>
    </>
  );
};
