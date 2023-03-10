import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './user.scss';

export const User: FC = () => {
  const { clikUserInfo } = useSelector((state: RootState) => state.user);

  return (
    <div className="container">
      <div className="user__info">
        <div className="user__text">
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых
            продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и
            ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать
            процессы за счет применения новейших технологий и увеличивать продажи, используя самые
            современные аналитические инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему или помочь
            справиться с трудностями. Не менее важно уделять внимание обмену знаниями: `&apos;`Один
            из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на
            совершенно новый уровень компетентности, уверенность в том, что окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться eslint-disable-next-line
            react/no-unescaped-entities самостоятельно`&apos;`.
          </p>
          <p>
            разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
            предпринимательскую деятельность. Он является совладельцем сети клиник эстетической
            медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className="user__contact">
          <ul>
            <li>
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="500px"
                height="500px"
                viewBox="0 0 500 500"
                // style="enable-background:new 0 0 500 500;"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M366.667,300c-33.334,33.333-33.334,66.666-66.667,66.666S233.333,333.333,200,300
                    c-33.333-33.334-66.667-66.667-66.667-100c0-33.333,33.333-33.333,66.667-66.667S133.333,0,100,0S0,100,0,100
                    c0,66.667,68.49,201.823,133.333,266.667S333.333,500,400,500c0,0,100-66.667,100-100C500,366.667,400,266.667,366.667,300z"
                  />
                </g>
              </svg>
              <a href="">+7 (954) 333-44-55</a>
            </li>
            <li>
              <svg
                enableBackground="new 0 0 64 64"
                version="1.1"
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Glyph_copy_2">
                  <path d="M63.125,9.977c-0.902-1.321-2.419-2.194-4.131-2.194H5.006c-1.676,0-3.158,0.842-4.067,2.117l31.16,25.982L63.125,9.977z" />
                  <path d="M0.006,14.328v36.889c0,2.75,2.25,5,5,5h53.988c2.75,0,5-2.25,5-5V14.461L32.099,41.09L0.006,14.328z" />
                </g>
              </svg>
              <a href="">{clikUserInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
