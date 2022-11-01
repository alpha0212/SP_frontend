import styled from "@emotion/styled";

export const SideContainer = styled.div<{ testProps: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => (props.testProps ? "22rem" : "5rem")};
  height: 100%;
  z-index: 99;
  background-color: black;
  color: white;
  transition: 0.4s ease;
  font-size: 3rem;
`;

/** 
 * export const ArrowContainer = styled.div`
  margin: 2rem 2rem 2rem 0;
  float: right;
`;

export const Arrow = styled.div<{ testProps: boolean }>`
  height: 1rem;
  width: 1rem;
  border: 2px solid white;
  border-width: 4px 4px 0 0;
  transition: 0.4s ease;
  transform: ${(props) =>
    props.testProps ? "rotate(225deg)" : "rotate(45deg)"};
`;
 */

export const HamburgerContainer = styled.div<{ testProps: boolean }>`
  margin: 1.5rem 1.2rem 2rem 1.5rem;
  float: right;
`;

export const HamburgerOne = styled.div`
  background-color: white;
  width: 2.5rem;
  padding-top: 0.18rem;
  border-radius: 2rem;
  margin-top: 0.5rem;
`;

export const HamburgerTwo = styled.div<{ testProps: boolean }>`
  background-color: white;
  width: 2rem;
  padding-top: 0.18rem;
  border-radius: 2rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
  margin-left: ${(props) => (props.testProps ? "0.5rem" : "")};
`;

export const HamburgerThree = styled.div<{ testProps: boolean }>`
  background-color: white;
  width: 1.5rem;
  padding-top: 0.18rem;
  border-radius: 2rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
  margin-left: ${(props) => (props.testProps ? "1rem" : "")};
`;

export const Logo = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 600;
  margin: 1.7rem 0 0 3rem;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MenuList = styled.div`
  height: 80%;
  top: 0;
  bottom: 0;
  margin: 2rem 0 0 3rem;
`;

export const Menus = styled.div`
  width: 17rem;
  height: 5rem;
  background-color: white;
  border-radius: 2rem;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MenusText = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 800;
  color: black;
  padding-top: 1.5rem;
  margin: 5rem 0 0 2rem;
`;
