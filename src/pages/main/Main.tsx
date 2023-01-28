import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../components/header/Header';
import { User } from '../../components/user/User';
import { Users } from '../../components/users/Users';
import { RootState } from '../../store';

export const Main: FC = () => {
  const { clikUserId } = useSelector((state: RootState) => state.user);

  return (
    <>
      <Header />
      {clikUserId ? <User /> : <Users />}
    </>
  );
};
