import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { host } from "src/LinkHost";
import styled from "@emotion/styled";

export const Toastify = styled(ToastContainer)`
  @media screen and (min-width: 40rem) {
    width: 27rem;
  }
`;

export const SnackBar = () => {
  const [authState, setAuthState] = useState({
    status: false,
  });
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      toast.success("로그인 되어있음😎", {
        autoClose: 2000,

        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    if (!localStorage.getItem("accessToken")) {
      toast.info("로그인 되어있지 않음😗", {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    axios
      .get(`http://${host}:8080/auth/auth`, {
        headers: {
          accessToken: localStorage.getItem("accessToken") as any,
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            status: true,
          });
        }
      });
  }, []);

  return <Toastify />;
};
