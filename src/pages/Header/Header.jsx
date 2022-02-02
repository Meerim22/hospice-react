import "./header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__inner__logo">
            <NavLink className="header__inner__logo__link" to="/">
              <img class="header__inner__logo__link__img" src="./img/logo.svg" alt="Первый Детский Хоспис" />
            </NavLink>
          </div>
          <div class="header__inner__circle-bg-border"></div>
          <div class="header__inner__circle-bg"></div>
          <ul class="header__inner__menu">
          <li class="header__inner__menu__item">
              <NavLink className="header__inner__menu__item__link" to="/aboutfund">О фонде</NavLink>
            </li>
            <li class="header__inner__menu__item">
              <NavLink className="header__inner__menu__item__link" to="/wanthelp">Хочу помочь</NavLink>
            </li>
            <li class="header__inner__menu__item">
              <NavLink className="header__inner__menu__item__link" to="/need-help">Нужна помощь</NavLink>
            </li>
            <li class="header__inner__menu__item">
              <a class="header__inner__menu__item__link header__inner__menu__item__link-donate"
                href="/donate">Пожертвовать</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
