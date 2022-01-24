/* eslint-disable react/jsx-no-bind */
import Header from 'components/Header';
import Dashboard from 'components/Dashboard';
import NewTransactionModal from 'components/NewTransactionModal';
import { useState } from 'react';
import * as S from './styles';

function Home() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <S.Wrapper>
      <Header
        onOpenNewTransactionModal={() => handleOpenNewTransactionModal()}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </S.Wrapper>
  );
}

export default Home;
