import React from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { authenticate } from "../../actions";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const {email, password} = data;
    dispatch(authenticate(email, password));

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form__login">
      <p className="Form__name">Войти</p>
      <label htmlFor="email" className="form__label">
        Email
        <input {...register('email')}
          id="email"
          type="email"
          placeholder="mail@gmail.ru"
          name="email"
          className="form__input"
        />
      </label>
      <label htmlFor="password" className="form__label">
        Пароль
        <input {...register('password')}
          id="password"
          type="password"
          placeholder="*************"
          name="password"
          className="form__input"
        />
      </label>
      <a href="/" className="text">Забыли пароль?</a>
      <button type="submit" className="button__form">
        Войти
      </button>
      <span>
        Новый пользователь?<Link to="/registration">Регистрация</Link>
      </span>
    </form>
  );
};
