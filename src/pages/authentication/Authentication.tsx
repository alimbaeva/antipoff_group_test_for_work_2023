import React, { FC, FormEvent, useRef, useState } from 'react';
import { store } from '../../store';
import { createNewUser } from '../../store/usersreducer';
import './authentication.scss';

export const Authentication: FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const inputName = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputPasswordCop = useRef<HTMLInputElement>(null);

  const handleOnChange = (email: string) => {
    const regular =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    regular.test(email) ? setEmailError(false) : setEmailError(true);
    return regular.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailEr = handleOnChange(email);
    if (inputPassword.current?.value === inputPasswordCop.current?.value && emailEr && inputName) {
      if (inputName.current?.value && inputPassword.current?.value) {
        setErrorPassword(false);
        const options = {
          name: inputName.current?.value,
          email: email,
          password:
            inputPassword.current?.value !== inputPasswordCop.current?.value
              ? ''
              : inputPassword.current?.value,
        };
        store.dispatch(createNewUser(options));
      }
    } else {
      setErrorPassword(true);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p className="form__title">Регистрация</p>
        <label htmlFor="name">
          Имя
          <input ref={inputName} type="text" id="name" name="name" placeholder="" required />
        </label>
        <p className="hiden-opacity">Введите имя</p>
        <label htmlFor="mail">
          Электронная почта
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="mail"
            name="mail"
            placeholder=""
            className={emailError ? 'error_input' : ''}
          />
        </label>
        <p className={emailError ? 'error' : 'error hiden-opacity'}>Не валидное почта</p>
        <label htmlFor="password">
          Пароль
          <input ref={inputPassword} type="text" id="password" name="password" placeholder="" />
        </label>
        <p className="hiden-opacity">Ошибка</p>
        <label htmlFor="password-repead">
          Подтвердите пароль
          <input
            ref={inputPasswordCop}
            type="text"
            id="password-repead"
            name="password-repead"
            placeholder=""
            className={errorPassword ? 'error_input' : ''}
          />
        </label>
        <p className={errorPassword ? 'error' : 'error hiden-opacity'}>Пароль не совподает</p>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
