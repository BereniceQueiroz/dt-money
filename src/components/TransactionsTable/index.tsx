import * as S from './styles';

function TransactionTable() {
  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento</td>
            <td className="withdraw">R$12000</td>
            <td>Entrada</td>
            <td>22/01/22</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
}

export default TransactionTable;
