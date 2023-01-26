import React, { FC } from 'react';
import './header.scss';
// import { Title } from './Title';
import { TitleUser } from './TitleUser';

export const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <button className="back">Назад</button>
          {/* <Title /> */}
          <TitleUser />
          <button className="">Выйти</button>
        </div>
      </div>
    </header>
  );
};
