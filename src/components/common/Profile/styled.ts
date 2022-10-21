import styled from "@emotion/styled";

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 5rem;
`;

export const SumTime = styled.div`
  margin-top: 2rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 0rem 0rem 13rem;
  @media screen and (max-width: 40rem) {
    margin: 8rem 0 0 5rem;
  }
`;

export const keySumTime = styled.div``;

export const Horizontal = styled.div`
  border-bottom: 0.2rem solid rgba(217, 217, 217);
`;

export const HorizontalContainer = styled.div`
  width: 30rem;
  padding-top: 1.5vh;
  @media screen and (max-width: 40rem) {
    width: 20rem;
  }
`;
