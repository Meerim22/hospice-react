import "./aside.scss";

function Aside() {
    return (
        <aside class="sidebar">
            <div class="container">
                <div class="sidebar__inner">
                    <ul class="sidebar__inner__menu">
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">Наша миссия</a>
                        </li>
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">История создания фонда</a>
                        </li>
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">Сотрудники</a>
                        </li>
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">Отчёты</a>
                        </li>
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">Официальные документы</a>
                        </li>
                        <li class="sidebar__inner__menu__item">
                            <a class="sidebar__inner__menu__item__link" href="#">Наши программы</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Aside;