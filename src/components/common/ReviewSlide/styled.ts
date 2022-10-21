import styled from "@emotion/styled";

export const ReviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  margin: auto;
  padding-top: 5vh;
`;

export const horizontal_scroll = styled.div`
  width: 100%;
  height: 11rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const reviews_container = styled.div`
  max-height: 12rem;
  display: flex;
  overflow-x: auto;
`;

export const reviews_box = styled.div`
  min-width: 50rem;
  height: 11rem;
  border-radius: 1.2rem;
  line-height: 11rem;
  text-align: center;
  background-color: #ddd;
  margin-right: 0.2rem;
`;

export const reviewButton = styled.button``;
