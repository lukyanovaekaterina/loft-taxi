import React, { Component } from "react";
import logo from '../../src/logo1.svg';
import { authenticate } from "../actions";
import {PropTypes} from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";


export class Login extends Component {
  authenticate = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.authenticate(email.value, password.value);
  };

  render () {
  return (
    <>
    <div className="LoginSection">
      <aside className="left">
        <img src={logo} className="Loft__logo" alt="logo"/>
      </aside>
      <div className="reiht">
      {this.props.isLoggedIn ? (
      <p>
        You are logged in{" "}
            <Link to="/profile">
              go to profile
            </Link>
      </p>
    ):(
      <form onSubmit={this.authenticate} className="Form__login">
      <p className="Form__name">Войти</p>
      <label htmlFor="email" className="form__label">Email
      <input id="email" type="email" placeholder="mail@gmail.ru" name="email"
      className="form__input" />
      </label>
      <label htmlFor="password" className="form__label">Пароль
      <input id="password" type="password" placeholder="*************" name="password"
      className="form__input" />
      </label>
      <span>Забыли пароль?</span>
      <button onClick={this.unauthenticate}
      className="button__form">Войти</button>
      <span>Новый пользователь?<Link to="/registration">Регистрация</Link></span>
    </form>
    )}    
    </div>
    </div>      

    </>
  );
  }
}

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,

};

export const LoginWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Login);