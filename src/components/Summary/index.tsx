import { components } from 'assets';
import * as S from './styles';

function Summary() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <S.Title>Entradas</S.Title>
          <components.Income />
        </S.Header>
        <S.Text>R$1000,00</S.Text>
      </S.Content>
      <S.Content>
        <S.Header>
          <S.Title>Saídas</S.Title>
          <components.Outcome />
        </S.Header>
        <S.Text>- R$1000,00</S.Text>
      </S.Content>
      <S.Content className="highligth-bg">
        <S.Header>
          <S.Title>Total</S.Title>
          <components.Total />
        </S.Header>
        <S.Text>- R$500,00</S.Text>
      </S.Content>
    </S.Wrapper>
  );
}

export default Summary;
