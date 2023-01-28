import { FC, useState } from 'react';
import { store } from '../../store';
import { getUser } from '../../store/usersreducer';
import { UserI } from '../../types/types';

interface Card {
  card: UserI;
  key: number;
}

export const UserRender: FC<Card> = ({ card }: Card) => {
  const [hartTrue, setHartTrue] = useState(localStorage.getItem(`${card.id}`) ? true : false);

  const handleCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const curentCard = e.currentTarget;
    const targetEl = e.target as HTMLButtonElement;
    const curentCardId = String(curentCard.getAttribute('id'));
    if (targetEl.getAttribute('id') === 'hart') {
      targetEl.classList.toggle('hart-true');
      if (targetEl.classList.contains('hart-true')) {
        localStorage.setItem(`${curentCardId}`, 'true');
        setHartTrue(true);
      } else {
        localStorage.removeItem(`${curentCardId}`);
        setHartTrue(false);
      }
    } else {
      store.dispatch(getUser(curentCardId));
    }
  };

  return (
    <div onClick={(e) => handleCard(e)} id={`${card.id}`} className="users__card">
      <div className="img">
        <img src={card.avatar} alt="" />
      </div>
      <p>
        {card.first_name} {card.last_name}
      </p>
      <button id="hart" className={hartTrue ? 'hart-true' : ''}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="511.626px"
          height="511.626px"
          viewBox="0 0 511.626 511.626"
          // className="hiden"
          className={hartTrue ? 'hiden' : ''}
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M475.366,71.949c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136
		c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414
		c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562
		c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.55,0,128.286,0,170.16
		c0,12.753,2.24,25.891,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.792,19.414,27.834
		c7.233,9.041,12.519,15.272,15.846,18.698c3.33,3.426,5.948,5.903,7.851,7.427L243.25,469.938
		c3.427,3.426,7.614,5.144,12.562,5.144s9.138-1.718,12.563-5.144l177.87-171.31c43.588-43.58,65.38-86.406,65.38-128.472
		C511.626,128.279,499.54,95.546,475.366,71.949z M421.405,271.795L255.813,431.391L89.938,271.507
		C54.344,235.922,36.55,202.133,36.55,170.156c0-15.415,2.046-29.026,6.136-40.824c4.093-11.8,9.327-21.177,15.703-28.124
		c6.377-6.949,14.132-12.607,23.268-16.988c9.141-4.377,18.086-7.328,26.84-8.85c8.754-1.52,18.079-2.281,27.978-2.281
		c9.896,0,20.557,2.424,31.977,7.279c11.418,4.853,21.934,10.944,31.545,18.271c9.613,7.332,17.845,14.183,24.7,20.557
		c6.851,6.38,12.559,12.229,17.128,17.559c3.424,4.189,8.091,6.283,13.989,6.283c5.9,0,10.562-2.094,13.99-6.283
		c4.568-5.33,10.28-11.182,17.131-17.559c6.852-6.374,15.085-13.222,24.694-20.557c9.613-7.327,20.129-13.418,31.553-18.271
		c11.416-4.854,22.08-7.279,31.977-7.279s19.219,0.761,27.977,2.281c8.757,1.521,17.702,4.473,26.84,8.85
		c9.137,4.38,16.892,10.042,23.267,16.988c6.376,6.947,11.612,16.324,15.705,28.124c4.086,11.798,6.132,25.409,6.132,40.824
		C475.078,202.133,457.19,236.016,421.405,271.795z"
            />
          </g>
        </svg>
        <svg
          // className="hart-2"
          className={hartTrue ? 'hart-2' : 'hiden hart-2'}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="511.626px"
          height="511.627px"
          viewBox="0 0 511.626 511.627"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M475.366,71.951c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136
		c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414
		c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562
		c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.552,0,128.288,0,170.162
		c0,12.753,2.24,25.889,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.796,19.414,27.837
		c7.233,9.042,12.519,15.27,15.846,18.699c3.33,3.422,5.948,5.899,7.851,7.419L243.25,469.937c3.427,3.429,7.614,5.144,12.562,5.144
		s9.138-1.715,12.563-5.137l177.87-171.307c43.588-43.583,65.38-86.41,65.38-128.475C511.626,128.288,499.537,95.552,475.366,71.951
		z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};
