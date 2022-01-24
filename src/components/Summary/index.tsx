import { components } from 'assets';
import { useTransactions } from 'hooks/useTransactions';
import * as S from './styles';

function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <S.Title>Entradas</S.Title>
          <components.Income />
        </S.Header>
        <S.Text>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </S.Text>
      </S.Content>
      <S.Content>
        <S.Header>
          <S.Title>Saídas</S.Title>
          <components.Outcome />
        </S.Header>
        <S.Text>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </S.Text>
      </S.Content>
      <S.Content className="highligth-bg">
        <S.Header>
          <S.Title>Total</S.Title>
          <components.Total />
        </S.Header>
        <S.Text>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </S.Text>
      </S.Content>
    </S.Wrapper>
  );
}

export default Summary;
