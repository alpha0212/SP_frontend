import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "src/helper/AuthContext";
import * as S from "./styled";

export const Profile = () => {
  let { id } = useParams(); // 재할당 가능
  let navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [user, setUser] = useState("");
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/todaytimes/byuserId/${id}`)
      .then((response) => {
        setListOfPosts(response.data);
      });
    axios.get(`http://localhost:8080/auth/basicinfo/${id}`).then((response) => {
      setUser(response.data.id);
    });
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <S.DayContainer key={key}>
            <S.DayTime
              onClick={() => {
                navigate(`/timedata/${value.id}`);
              }}
            >
              날짜: {value.createdAt.slice(0, 10)}
            </S.DayTime>
          </S.DayContainer>
        );
      })}
    </div>
  );
};
