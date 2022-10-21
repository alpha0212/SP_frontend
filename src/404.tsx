import React from "react";
import styled from "@emotion/styled";

export const NotDivContainer = styled.div`
  width: 100%;
`;

export const NotDiv = styled.div`
  text-align: center;
  padding-top: 30rem;
  font-size: 10rem;
  font-weight: 600;
`;

export const NotFound: React.FC = () => {
  return (
    <NotDivContainer>
      <NotDiv>
        404<div style={{ fontSize: "5rem" }}>Page Not Found</div>
      </NotDiv>
    </NotDivContainer>
  );
};
