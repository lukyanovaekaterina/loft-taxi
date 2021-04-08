import React, { Component } from "react";
import logo2 from '../../src/assets/logo2.svg';
import {connect} from "react-redux";
import {logOut} from "../actions";


export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

 render() {
  return (
    <form className="Profile__form">
        <h2 className="Form__name">Профиль</h2>
        <h5 className="Profile__name-text">Введите платежные данные</h5>
        <div className="Profile__form-center">     
      <div className="Profile__card">
        <label htmlFor="name">Имя владельца<br />
          <input 
          id="name" 
          type="text" 
          placeholder="Loft" 
          name="name"
          className="form__input form__input-card"/>
        </label>
        <label htmlFor="number">Номер карты<br />
          <input
          id="number"
          type="number" 
          placeholder="5545  2300  3432  4521" 
          name="number"
          className="form__input form__input-card" />
        </label>
        <div className="card__form-2">
        <label htmlFor="data">MM/YY<br />
          <input
          id="data"
          type="number" 
          placeholder="05/08" 
          name="data"
          className="form__input form__input-card2" />
        </label>
        <label htmlFor="cvc">CVC<br />
          <input
          id="cvc"
          type="number" 
          placeholder="667" 
          name="cvc"
          className="form__input form__input-card2" />
        </label>
        </div>
      </div>
      <div className="Card__front">
        <div className="Card__front-content">
        <div className="Card__front-top">
        <img src={logo2} className="Loft__logo-card" alt="logo"/>          
        </div>
        <div className="Card__front-center">

        </div>
        <div className="Card__front-bottom">
        </div>
        </div>
      </div>
      </div>
      <button onClick={this.unauthenticate} className="button__form">Сохранить</button>
    </form>
  );
} 
}
export default connect(
  null,
  { logOut }
)(Profile);