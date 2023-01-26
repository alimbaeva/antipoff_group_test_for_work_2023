import React, { FC } from 'react';
import './authentication.scss';

export const Authentication: FC = () => {
  return (
    <div className="container">
      <form>
        <p className="form__title">Регистрация</p>
        <label htmlFor="name">
          Имя
          <input type="text" id="name" name="name" placeholder="" className="error_input" />
        </label>
        <p className="error">Ошибка</p>
        <label htmlFor="mail">
          Электронная почта
          <input type="text" id="mail" name="mail" placeholder="" />
        </label>
        <p className="error hiden-opacity">Ошибка</p>
        <label htmlFor="password">
          Пароль
          <input type="text" id="password" name="password" placeholder="" />
        </label>
        <p className="error hiden-opacity">Ошибка</p>
        <label htmlFor="password-repead">
          Подтвердите пароль
          <input type="text" id="password-repead" name="password-repead" placeholder="" />
        </label>
        <p className="error hiden-opacity">Ошибка</p>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
