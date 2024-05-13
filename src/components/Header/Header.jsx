import React from "react";
import "./header.css";
import LOGO from "../../img/logo-header.png";

const list = ["Лента", "Мессенджер", "Избранное", "Личный кабинет", "Выбор валюты", 'Зарегистрироваться'];
const urls = ["/", "/", "/", "/", "/", "/"];

export default function Header() {
  return (
    <header>
      <a href="/"><img src={LOGO} alt="LOGO" className="logo" /></a>
      <nav>
        <ul className="header__nav-ul">
          {
            list.map((item, index) => {
              return (
                <li key={index}>
                  <a href={urls[index]}>{item}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
      <button className="header__button">Войти</button>
    </header>
  );
}
