import styled from "@emotion/styled";

export const ReviewContainer = styled.div`
  display: flex;
  width: 80%;
  height: 20vh;
  margin: auto;
  padding-top: 5vh;
`;

export const horizontal_scroll = styled.div`
  width: 100%;
  height: 8rem;
  background-color: #fff;
  border: 0.1rem solid black;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const reviews_container = styled.div`
  max-height: 12rem;
  border: 0.1rem solid #ddd;
  display: flex;
  overflow-x: auto;
`;

export const reviews_box = styled.div`
  min-width: 50rem;
  height: 11rem;
  line-height: 11rem;
  text-align: center;
  background-color: #ddd;
  margin-right: 0.2rem;
`;

export const reviewButton = styled.button``;
