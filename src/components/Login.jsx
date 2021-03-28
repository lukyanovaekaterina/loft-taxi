import React, { Component } from "react";
import logo from '../../src/logo1.svg';
import {PropTypes} from 'prop-types'
import { withAuth } from "./AuthContext";


export class Login extends Component {
  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  };

  authenticate = (event) => {
    event.preventDefault();
    const {email, password} = event.target;
    this.props.logIn(email.value, password.value);
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
            <button onClick={this.goToProfile}>
              go to profile
            </button>
      </p>
    ):(
      <form onSubmit={this.authenticate} className="Form__login">
      <p className="Form__name">Войти</p><br />
      <label htmlFor="email">Email<br />
      <input id="email" type="email" placeholder="mail@gmail.ru" name="email"
      className="form__input" />
      </label><br />
      <label htmlFor="password">Пароль<br />
      <input id="password" type="password" placeholder="*************" name="password"
      className="form__input" />
      </label><br />
      <span>Забыли пароль?</span><br />
      <button type="submit"
      className="button__form">Войти</button><br />
      <span>Новый пользователь?<button>Регистрация</button></span>
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
  navigate: PropTypes.func,
};

export const LoginWithAuth = withAuth(Login);