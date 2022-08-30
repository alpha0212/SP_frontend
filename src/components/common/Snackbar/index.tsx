import styled from "@emotion/styled";

function SnackBar() {
  return (
    <SnackBarRoot className="body2">
      <LeadText>이것도 이용해보세요</LeadText>
    </SnackBarRoot>
  );
}

const SnackBarRoot = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  height: 48px;
  width: calc(100% - 20px);
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 500ms;
  &.disappear {
    opacity: 0;
    transform: translateY(50px);
  }
  &.appear {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LeadText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default SnackBar;
