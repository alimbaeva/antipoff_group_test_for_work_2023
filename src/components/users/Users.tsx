import { FC, useEffect } from 'react';
import { UserRender } from './UserRender';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { getAllUsers } from '../../store/usersreducer';
import { Pagination } from '../pagination/Pagination';
import './users.scss';

export const Users: FC = () => {
  const { users, showUsers } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    store.dispatch(getAllUsers());
  }, []);

  const userRender = () => {
    return users.map((card, id) => {
      if (id < showUsers) return <UserRender card={card} key={id} />;
    });
  };

  return (
    <div className="container">
      <div className="users">{userRender()}</div>
      <Pagination />
    </div>
  );
};
