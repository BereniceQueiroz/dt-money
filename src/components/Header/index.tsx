import { components } from 'assets';
import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <components.Logo />
        <S.Button type="button">Nova transação</S.Button>
      </S.Content>
    </S.Wrapper>
  );
}

export default Header;
