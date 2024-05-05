import React from "react";
import "./Main.css";

import start from "../../img/Star.svg";
import Lightning from "../../img/Lightning.svg";
import banner from "../../img/Banner.svg";
import heart from "../../img/Heart.svg";

export const Registration = () => {
  return (
    <div className="registration-box">
      <div className="container">
        <ul className="advantage-list">
          <li className="advantage-list__item advantage-list__item--1">
            <div className="banner">
              <span className="banner__text banner__text--right">
                Ищи интересные маршруты
                <img className="banner__image" src={start} alt="Звезда" />
              </span>
            </div>
          </li>
          <li className="advantage-list__item advantage-list__item--2">
            <div className="banner">
              <span className="banner__text">
                <img className="banner__image" src={Lightning} alt="Молния" />
                Общайся с местными
              </span>
            </div>
          </li>
          <li className="advantage-list__item advantage-list__item--3">
            <div className="banner">
              <span className="banner__text">
                <img className="banner__image" src={banner} alt="Банер" />
                Сохраняй любимое
              </span>
            </div>
          </li>
          <li className="advantage-list__item advantage-list__item--4">
            <div className="banner">
              <span className="banner__text banner__text--right">
                Делись любимыми местами
                <img className="banner__image" src={heart} alt="Сердечко" />
              </span>
            </div>
          </li>
          <li className="advantage-list__item advantage-list__item--5">
            <a className="registration-button" href="#">
              РЕГИСТРИРУЙСЯ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
