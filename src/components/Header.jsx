import React from 'react';
import logo2 from '../assets/logo2.svg';
import { Link } from "react-router-dom";
 
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
          <Link to="/Map"
            className="menu__button"
          >
            Карта
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/Profile"
            className="menu__button"
          >
            Профиль
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/Registration"
            className="menu__button"
          >
            Выйти
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/"
            className="menu__button"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  );
};