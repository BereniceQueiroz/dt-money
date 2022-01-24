/* eslint-disable react/jsx-no-bind */
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from 'hooks/useTransactions';
import { components } from 'assets';
import * as S from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Wrapper onSubmit={handleCreateNewTransaction}>
        <S.ButtonClosed type="button" onClick={onRequestClose}>
          <components.Close />
        </S.ButtonClosed>
        <S.Title>Cadastrar transação</S.Title>
        <S.Input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <S.Input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
        <S.Content>
          <S.RadioBox
            type="button"
            onClick={() => setType('deposit')}
            className={type === 'deposit' ? 'isActiveDeposit' : ''}
          >
            <components.Income />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            className={type === 'withdraw' ? 'isActiveDraw' : ''}
          >
            <components.Outcome />
            <span>Saída</span>
          </S.RadioBox>
        </S.Content>
        <S.Input
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <S.Button type="submit">Cadastrar</S.Button>
      </S.Wrapper>
    </Modal>
  );
}

export default NewTransactionModal;
