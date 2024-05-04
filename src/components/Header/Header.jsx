import "./header.css";
import LOGO from "../../img/LOGO.svg";

const list = ["Лента", "Месенджер", "Избранное", "Личный кабинет", "Выбор валюты", 'Зарегистрироваться'];

export default function Header() {
  return (
    <header>
      <img src={LOGO} alt="LOGO" className="logo" />
      <nav>
        <ul className="header__nav-ul">
          {
            list.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </nav>
      <button className="header__button">Войти</button>
    </header>
  );
}
