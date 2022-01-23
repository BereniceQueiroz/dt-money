import Summary from 'components/Summary';
import TransactionTable from 'components/TransactionsTable';
import * as S from './styles';

function Dashboard() {
  return (
    <S.Wrapper>
      <Summary />
      <TransactionTable />
    </S.Wrapper>
  );
}

export default Dashboard;
