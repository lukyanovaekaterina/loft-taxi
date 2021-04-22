import React from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { authenticate } from "../../actions";
import {Link} from "react-router-dom";

export const RegistrationForm = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const {email, name, password } = data;
    dispatch(authenticate(email, name, password ))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form__login">
    <p className="Form__name">Регистрация</p><br />
    <label htmlFor="email">Email<br />
    <input {...register('email')}
    id="email" 
    type="email" 
    placeholder="mail@gmail.ru" 
    name="email"
    className="form__input" />
    </label>
    <label htmlFor="name">Как вас зовут?<br />
      <input {...register('name')}
      id="name" 
      type="text"
      placeholder="Петр Александрович"
      name="name"
      className="form__input"
      />
    </label>

    <label htmlFor="password">Придумайте пароль!<br />
    <input {...register('password')}
    id="password" 
    type="password" 
    placeholder="*************" 
    name="password"
    className="form__input" />
    </label><br />
    <Link to="/"
     className="button__form">Зарегистрироваться</Link><br />
    <span>Уже зарегистрировны?<button type="submit">Войти</button></span>
  </form>
  )
}