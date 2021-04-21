import React, { Component } from "react";
import logo from '../../logo1.svg';
import {PropTypes} from 'prop-types';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {LoginForm} from './LoginForm';


export class Login extends Component {

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
            <Link to="/map">
              go to map
            </Link>
      </p>
    ):(
      <LoginForm />
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
)(Login);