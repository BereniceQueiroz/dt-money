/* eslint-disable react/jsx-no-bind */
import Modal from 'react-modal';
import { components } from 'assets';
import { FormEvent, useState } from 'react';
import { api } from 'service/api';
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
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
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
          value={value}
          onChange={e => setValue(Number(e.target.value))}
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
