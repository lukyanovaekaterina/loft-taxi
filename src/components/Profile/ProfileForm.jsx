import React from "react";
import {useForm} from 'react-hook-form';
import { useDispatch } from "react-redux";
import { authenticate } from "../../actions";
import logo2 from '../../assets/logo2.svg';

export const ProfileForm = () => {
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const {name, cardNumber, expiryDate, cvc } = data;
    dispatch(authenticate(name, cardNumber, expiryDate, cvc ))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Profile__form">
        <h2 className="Form__name">Профиль</h2>
        <h5 className="Profile__name-text">Введите платежные данные</h5>
        <div className="Profile__form-center">     
      <div className="Profile__card">
        <label htmlFor="name">Имя владельца<br />
          <input {...register('name')}
          id="name" 
          type="text" 
          placeholder="Loft" 
          name="name"
          className="form__input form__input-card"/>
        </label>
        <label htmlFor="cardNumber">Номер карты<br />
          <input {...register('cardNumber')}
          id="cardNumber"
          type="cardNumber" 
          placeholder="5545  2300  3432  4521" 
          name="cardNumber"
          className="form__input form__input-card" />
        </label>
        <div className="card__form-2">
        <label htmlFor="expiryDate">MM/YY<br />
          <input {...register('expiryDate')}
          id="expiryDate"
          type="expiryDate" 
          placeholder="0/058" 
          name="expiryDate"
          className="form__input form__input-card2" />
        </label>
        <label htmlFor="cvc">CVC<br />
          <input {...register("cvc")}
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
      <button type="submit" className="button__form">Сохранить</button>
    </form>
  )
  

}