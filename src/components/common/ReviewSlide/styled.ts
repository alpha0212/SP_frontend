import styled from '@emotion/styled';

export const ReviewContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
`;

export const ReviewContent = styled.div`
  width: 35rem;
  height: 10rem;
  background-color: #ffffff;
  border-radius: 1.5rem;
  margin: 0rem 2rem 0rem 2rem;
  animation: fadein 2.5s;
  -webkit-animation: fadein 2.5s;
  box-shadow: 0.1rem 0.3rem 0.5rem 0.1px rgba(213, 223, 247, 0.35);
  @media screen and (max-width: 1080px) {
    width: 35rem;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ReviewFontSide = styled.div`
  font-size: 1.5rem;
  font-family: Pretendard;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
`;

export const ReviewStar = styled.div`
  font-size: 1rem;
  padding-bottom: -0.5rem;
`;
export const ReviewFont = styled.div`
  margin-top: 0.5rem;
`;
