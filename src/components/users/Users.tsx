import { FC } from 'react';
import { UserRender } from './UserRender';
import './users.scss';

export const Users: FC = () => {
  return (
    <div className="container">
      <div className="users">
        <UserRender />
      </div>
    </div>
  );
};
