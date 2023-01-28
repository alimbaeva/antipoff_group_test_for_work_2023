import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './header.scss';
import { Title } from './Title';
import { TitleUser } from './TitleUser';

export const Header: FC = () => {
  const { clikUserId } = useSelector((state: RootState) => state.user);

  return (
    <header>
      <div className="container">
        <div className="header">
          <button className="back">Назад</button>
          {clikUserId ? <TitleUser /> : <Title />}
          <button className="">Выйти</button>
        </div>
      </div>
    </header>
  );
};
