import { FC, useEffect } from 'react';
import { UserRender } from './UserRender';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { getAllUsers } from '../../store/usersreducer';
import './users.scss';

export const Users: FC = () => {
  const { users } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log('1');
    store.dispatch(getAllUsers());
    console.log('2');
  }, []);

  // store.dispatch(getAllUsers());

  const userRender = () => {
    return users.map((card, id) => {
      return <UserRender card={card} key={id} />;
    });
  };

  return (
    <div className="container">
      <div className="users">{userRender()}</div>
    </div>
  );
};
