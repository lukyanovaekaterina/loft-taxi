import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registration } from "../../actions";
import { Link, Redirect } from "react-router-dom";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, name, password } = data;
    dispatch(registration(email, name, password));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Form__login">
      <p className="Form__name">Регистрация</p>
      <br />
      <label htmlFor="email">
        Email
        <br />
        <input
          {...register("email", {required:true})}
          id="email"
          type="email"
          placeholder="mail@gmail.ru"
          name="email"
          className="form__input"
        />
      </label>
      <label htmlFor="name">
        Как вас зовут?
        <br />
        <input
          {...register("name", {required:true})}
          id="name"
          type="text"
          placeholder="Петр Александрович"
          name="name"
          className="form__input"
        />
      </label>

      <label htmlFor="password">
        Придумайте пароль!
        <br />
        <input
          {...register("password", {required:true})}
          id="password"
          type="password"
          placeholder="*************"
          name="password"
          className="form__input"
        />
      </label>
      <br />
      <button type="submit" className="button__form">
        Зарегистрироваться
      </button>
      <br />
      <span>
        Уже зарегистрировны?<Link  to="/" >Войти</Link>
      </span>
    </form>
  );
};
