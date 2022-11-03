import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
`;

export const SideContainer = styled.div<{ testProps: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => (props.testProps ? "25rem" : "5rem")};
  height: 100%;
  z-index: 99;
  background-color: #fff;
  color: white;
  transition: 0.4s ease;
  font-size: 3rem;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
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
  background-color: black;
  width: 2.5rem;
  padding-top: 0.18rem;
  border-radius: 2rem;
  margin-top: 0.5rem;
`;

export const HamburgerTwo = styled.div<{ testProps: boolean }>`
  background-color: black;
  width: 2rem;
  padding-top: 0.18rem;
  border-radius: 2rem;
  margin-top: 0.5rem;
  transition: all 0.2s;
  margin-left: ${(props) => (props.testProps ? "0.5rem" : "")};
`;

export const HamburgerThree = styled.div<{ testProps: boolean }>`
  background-color: black;
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
  color: black;
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

export const Menus = styled.div<{ backgroundProps: boolean }>`
  font-family: Pretendard;
  width: 18rem;
  height: 5rem;
  background-color: ${(props) => (props.backgroundProps ? "#2b2b2b" : "none")};
  color: ${(props) => (props.backgroundProps ? "white" : "black")};
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: 800;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: fadein 2s;
  margin-top: 5rem;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: all 0.2s;
`;

export const DoWeekMenu = styled.div<{ backgroundProps: boolean }>`
  font-family: Pretendard;
  width: 18rem;
  height: 5rem;
  background-color: ${(props) => (props.backgroundProps ? "#2b2b2b" : "none")};
  color: ${(props) => (props.backgroundProps ? "white" : "black")};
  border-radius: 2rem;
  font-size: 2rem;
  font-weight: 800;
  border: 1px solid rgba(0, 0, 0, 0.1);
  animation: fadein 2s;
  margin-top: 5rem;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  transition: all 0.2s;
`;

export const MenuText = styled.div`
  margin: 1.5rem 0 0 2.5rem;
`;
