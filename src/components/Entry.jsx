import React from "react";
import logo from '../../src/logo1.svg';


export const Entry = ({navigate}) => {
  return (
    <section className="EntrySection">
      <aside className="left">
        <img src={logo} className="Loft__logo" alt="logo"/>
      </aside>
      <div className="reiht">
      
      <form className="Form__entry">
      <p className="Form__name">Войти</p><br />
      <label htmlFor="email">Email<br />
      <input 
      id="email" 
      type="email" 
      placeholder="mail@gmail.ru" 
      name="email"
      className="form__input" />
      </label><br />
      <label htmlFor="password">Пароль<br />
      <input id="password" 
      type="password" 
      placeholder="*************" 
      name="password"
      className="form__input" />
      </label><br />
      <span>Забыли пароль?</span><br />
      <button 
      onClick={() => {
        navigate("registration")
      }}
      className="button__form">Войти</button><br />
      <span>Новый пользователь?<button>Регистрация</button></span>
    </form>
    </div>
    </section>
  );
};



