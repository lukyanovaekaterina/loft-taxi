import React from 'react';
import logo from '../../src/logo1.svg';
import {Link} from "react-router-dom";

export const Registration = ({navigate}) => {
  return (
    <section className="RegisrationSection">
      <aside className="left">
        <img src={logo} className="Loft__logo" alt="logo"/>
      </aside>
      <div className="reiht">
      
      <form className="Form__login">
      <p className="Form__name">Регистрация</p><br />
      <label htmlFor="email">Email<br />
      <input 
      id="email" 
      type="email" 
      placeholder="mail@gmail.ru" 
      name="email"
      className="form__input" />
      </label>
      <label htmlFor="name">Как вас зовут?<br />
        <input id="name"
        type="text"
        placeholder="Петр Александрович"
        name="name"
        className="form__input"
        />
      </label>

      <label htmlFor="password">Придумайте пароль!<br />
      <input id="password" 
      type="password" 
      placeholder="*************" 
      name="password"
      className="form__input" />
      </label><br />
      <Link to="/login"
       className="button__form">Зарегистрироваться</Link><br />
      <span>Уже зарегистрировны?<button>Войти</button></span>
    </form>
    </div>
    </section>
  )
}