import React from 'react';
import logo from '../../assets/logo2.svg';
import {RegistrationForm} from './RegistrationForm';

export const Registration = () => {
  return (
    <section className="RegisrationSection">
      <aside className="left">
        <img src={logo} className="Loft__logo" alt="logo"/>
      </aside>
      <div className="reiht">
      <RegistrationForm />
    </div>
    </section>
  )
}
