import React from 'react';
import './Main.css';

import Star from '../../img/Star.svg';
import Lightning from '../../img/Lightning.svg';
import Bookmark from '../../img/Bookmark.svg';
import Heart from '../../img/Heart.svg';

const Registration = () => {
  return (
    <section className='Registration'>
      <div className='Registration__wrapper'>
        <ul className="Registration__list">
          <li className="Registration__item">
            <p className='Registration__text'>Ищи интересные маршруты</p>
            <div><img className="Registration__icon" src={Star} alt="Звезда" /></div>
          </li>
          <li className="Registration__item">
            <p className='Registration__text'>Общайся с местными</p>
            <div><img className="Registration__icon" src={Lightning} alt="Молния" /></div>
          </li>
          <li className="Registration__item">
            <p className='Registration__text'>Сохраняй любимое</p>
            <div><img className="Registration__icon" src={Bookmark} alt="Закладка" /></div>
          </li>
          <li className="Registration__item">
            <p className='Registration__text'>Делись любимыми местами</p>
            <div><img className="Registration__icon" src={Heart} alt="Сердце" /></div>
          </li>
        </ul>
        <p className='Registration__background-text-up'>ЗАЧЕМ</p>
        <p className='Registration__background-text-center'>РЕГИСТ</p>
        <p className='Registration__background-text-down'>РАЦИЯ</p>
        <a className='Registration__button' href="/">РЕГИСТРИРУЙСЯ</a>
      </div>
    </section>
  );
}

export default Registration;
