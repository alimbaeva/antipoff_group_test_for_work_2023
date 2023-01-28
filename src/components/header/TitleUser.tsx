import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { UserI } from '../../types/types';

export const TitleUser: FC = () => {
  const { clikUserInfo } = useSelector((state: RootState) => state.user);

  const returnUserTitle = (card: UserI) => {
    return (
      <div className="title__user">
        <div className="title__img">
          <img src={card.avatar} alt="user" />
        </div>
        <div className="title__info">
          <h1>
            {card.first_name} {card.last_name}
          </h1>
          <p>{card.email}</p>
        </div>
      </div>
    );
  };

  return <>{clikUserInfo && returnUserTitle(clikUserInfo)}</>;
};
