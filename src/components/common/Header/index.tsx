import * as S from "./styled";
interface HeaderProps {
  value: string;
}
export const Header: React.FC<HeaderProps> = (title) => {
  const { value } = title;
  return (
    <S.HeaderContainer>
      <S.Header>{value}</S.Header>
    </S.HeaderContainer>
  );
};
