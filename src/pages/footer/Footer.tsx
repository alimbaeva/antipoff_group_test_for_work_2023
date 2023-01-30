import { FC } from 'react';
import './footer.scss';

export const Footer: FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <a href="https://github.com/alimbaeva" target="_blank" rel="noreferrer">
            Алымбаева Асель
          </a>
          <a href="" target="_blank">
            ссылка на репозиторий
          </a>
          <a href="https://t.me/aselAl86" target="_blank" rel="noreferrer">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              xmlSpace="preserve"
            >
              <path
                d="M19.2,4.4L2.9,10.7c-1.1,0.4-1.1,1.1-0.2,1.3l4.1,1.3l1.6,4.8c0.2,0.5,0.1,0.7,0.6,0.7c0.4,0,0.6-0.2,0.8-0.4
                    c0.1-0.1,1-1,2-2l4.2,3.1c0.8,0.4,1.3,0.2,1.5-0.7l2.8-13.1C20.6,4.6,19.9,4,19.2,4.4z M17.1,7.4l-7.8,7.1L9,17.8L7.4,13l9.2-5.8
                    C17,6.9,17.4,7.1,17.1,7.4z"
              />
            </svg>
            <p>aselAl86</p>
          </a>
        </div>
      </div>
    </footer>
  );
};
