import { components } from 'assets';
import * as S from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Content>
        <components.Logo />
        <S.Button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </S.Button>
      </S.Content>
    </S.Wrapper>
  );
}

export default Header;
