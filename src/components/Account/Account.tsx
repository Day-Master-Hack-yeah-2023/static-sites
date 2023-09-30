import React from 'react';
import {
  AccountImg,
  AccountResultItem,
  AccountStyled,
  AccountTitle,
} from './Account.styled';

const Account = () => {
  return (
    <AccountStyled>
      <AccountTitle>My account</AccountTitle>
      <AccountImg />
      <AccountResultItem></AccountResultItem>
    </AccountStyled>
  );
};

export { Account };
