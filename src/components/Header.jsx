import React from 'react';
import logo2 from '../assets/logo2.svg';

export const Header =({navigate}) => {
  return (
    <header className="header">
      <div className="Header__logo">
        <img className="logo__icon" src={logo2} alt="logo"/>
        <p className="logo__name">lofttaxi</p>
      </div>
    <nav className="nav__header">
      <ul className="menu__list">
        <li className="menu__item">
          <button 
          onClick={() => {
            navigate("map")
            }}
            className="menu__button"
          >
            Карта
          </button>
        </li>
        <li className="menu__item">
          <button 
          onClick={() => {
            navigate("profile")
            }}
            className="menu__button"
          >
            Профиль
          </button>
        </li>
        <li className="menu__item">
          <button 
          onClick={() => {
            navigate("entry")
            }}
            className="menu__button"
          >
            Выйти
          </button>
        </li>
        <li className="menu__item">
          <button 
          onClick={() => {
            navigate("registration")
            }}
            className="menu__button"
          >
            Войти
          </button>
        </li>
      </ul>
    </nav>
  </header>
  );
};