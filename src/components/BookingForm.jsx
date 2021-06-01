import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {getAddressList} from "../actions"
import auto1 from "../assets/auto1.png";
import auto2 from "../assets/auto2.png";
import auto3 from "../assets/auto3.png";
import elipse from "../assets/Ellipse18.svg";
import vector from "../assets/Vector1.svg";
import vector2 from "../assets/Vector2.svg";
import vector3 from "../assets/Vector3.svg";

export const BookingForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    }

  return (
    <form className="Booking__form" onSubmit={handleSubmit(onSubmit)} >

      <label htmlFor="adress1" className="adress">
        <br />
        <img className="elipse" src={elipse} alt="elipse" />
        <input
          {...register("adress1")}
          id="adress1"
          type="adress1"
          name="adress1"
          className="form__input"
        />
        <button className="vector__btn">
          <img className="vector2" src={vector2} alt="cross" />
        </button>
        <button className="vector__btn">
          <img className="vector3" src={vector3} alt="check" />
        </button>
      </label>
      <label htmlFor="adress2" className="adress">
        <br />
        <img className="vector" src={vector} alt="vector" />
        <input
          {...register("adress2")}
          id="adress2"
          type="adress2"
          name="adress2"
          className="form__input"
        />
        <button className="vector__btn">
          <img className="vector2" src={vector2} alt="cross" />
        </button>
        <button className="vector__btn">
          <img className="vector3" src={vector3} alt="check" />
        </button>
      </label>

      <div className="rate__form">
        <div className="rate__form-container">
          <div className="rate__price-container">
            <button type="submit" className="rate__price">
              <h3>Стандарт</h3>
              <h5>Стоимость</h5>
              <h2>150 p</h2>
              <img className="rate__foto" src={auto1} alt="auto" />
            </button>
            <button type="submit" className="rate__price">
              <h3>Премиум</h3>
              <h5>Стоимость</h5>
              <h2>250 p</h2>
              <img className="rate__foto" src={auto2} alt="auto" />
            </button>
            <button type="submit" className="rate__price">
              <h3>Бизнес</h3>
              <h5>Стоимость</h5>
              <h2>300 p</h2>
              <img className="rate__foto" src={auto3} alt="auto" />
            </button>
          </div>
          <button type="submit" className="button__form">
            Заказать
          </button>
        </div>
      </div>
    </form>
  );
};
