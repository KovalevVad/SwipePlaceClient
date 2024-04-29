import "./header.css";
import LOGO from "../../img/LOGO.svg";

const list = ["Лента", "Месенджер", "Избранное", "Личный кабинет", "Выбор валюты", 'Зарегистрироваться'];
export default function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <img src={LOGO} alt="LOGO" />
      </a>
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
