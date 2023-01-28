import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { removeUserId } from '../../store/usersreducer';
import './header.scss';
import { Title } from './Title';
import { TitleUser } from './TitleUser';

export const Header: FC = () => {
  const { clikUserId } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const [widthWindow, setwidthWindow] = useState(false);

  window.addEventListener('resize', function () {
    if (document.body.clientWidth <= 768 && !widthWindow) {
      setwidthWindow(true);
    } else if (document.body.clientWidth > 768 && !!widthWindow) {
      setwidthWindow(false);
    }
  });

  const handleBackBtn = () => {
    dispatch(removeUserId());
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <button onClick={handleBackBtn} className={clikUserId ? 'back' : 'hiden-opacity'}>
            <svg
              className={widthWindow ? '' : 'hiden'}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="306px"
              height="306px"
              viewBox="0 0 306 306"
              xmlSpace="preserve"
            >
              <g>
                <g id="chevron-left">
                  <polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153" />
                </g>
              </g>
            </svg>
            {widthWindow ? '' : 'Назад'}
          </button>
          <div className="header-info">{clikUserId ? <TitleUser /> : <Title />}</div>
          <button className="exit">
            <svg
              className={widthWindow ? '' : 'hiden'}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.79 13.29C8.18 13.68 8.81 13.68 9.2 13.29L12.79 9.7C12.8827 9.60749 12.9563 9.4976 13.0064 9.37662C13.0566 9.25565 13.0824 9.12597 13.0824 8.995C13.0824 8.86403 13.0566 8.73435 13.0064 8.61338C12.9563 8.4924 12.8827 8.38251 12.79 8.29L9.2 4.7C9.01302 4.51302 8.75943 4.40798 8.495 4.40798C8.23057 4.40798 7.97698 4.51302 7.79 4.7C7.60302 4.88698 7.49798 5.14057 7.49798 5.405C7.49798 5.66943 7.60302 5.92302 7.79 6.11L9.67 8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H9.67L7.79 11.88C7.4 12.27 7.41 12.91 7.79 13.29ZM16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V5C0 5.55 0.45 6 1 6C1.55 6 2 5.55 2 5V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V15C16 15.55 15.55 16 15 16H3C2.45 16 2 15.55 2 15V13C2 12.45 1.55 12 1 12C0.45 12 0 12.45 0 13V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
                fill="#F8F8F8"
              />
            </svg>
            {widthWindow ? '' : 'Выйти'}
          </button>
        </div>
      </div>
    </header>
  );
};
