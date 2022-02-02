import "./aboutfund.scss";

function Aboutfund() {
  return (
    <main class="main">
        <section class="about-page">
            <div class="about-page__container">
                <h1 class="about-page__title">О фонде</h1>
                <h4 class="about-page__text">
                    Благотворительный фонд 
                    «Первый Детский Хоспис» помогает детям с тяжелыми неизлечимыми заболеваниями с 2003 года. 
                    За семнадцатилетнюю историю работы первого детского хосписа прошел путь от небольшого основанного по
                     инициативе протоиерея Ольга Труханова, до организации, построившей первый детский хоспис в Кыргызстане
                      и способствующей развитию служб паллиативной медицинской помощи в регионах. 
                       Благотворительный фонд «Детский хоспис» помогает детям с тяжелыми неизлечимыми заболеваниями с 2003 года.
                        За семнадцатилетнюю историю работы первый Детский хоспис прошел путь от небольшого благотворительного фонда,
                         основанного по инициативе 
                </h4>
            </div>

            <aside class="sidebar">
                <div class="container">
                    <div class="sidebar__inner">
                        <ul class="sidebar__inner__menu">
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="#">Наша миссия</a>
                            </li>
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="history-fund.html">История создания фонда</a>
                            </li>
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="#">Сотрудники</a>
                            </li>
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="reports.html">Отчёты</a>
                            </li>
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="official-doc.html">Официальные документы</a>
                            </li>
                            <li class="sidebar__inner__menu__item">
                                <a class="sidebar__inner__menu__item__link" href="#">Наши программы</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </section>

        <div class="call-to-action">
            <div class="container">
                <div class="call-to-action__inner">
                    <p class="call-to-action__inner__text">
                        Хочу пожертвовать
                    </p>
                    <div class="call-to-action__inner__money">
                        <span class="call-to-action__inner__money__item">100</span>
                        <span class="call-to-action__inner__money__item">200</span>
                        <span class="call-to-action__inner__money__item">500</span>
                        <span class="call-to-action__inner__money__item">1000</span>
                    </div>
                    <div class="call-to-action__inner__other-money">
                        <span class="call-to-action__inner__other-money__item">Другая сумма</span>
                    </div>
                    <a class="call-to-action__inner__btn" href="#">
                        Помочь
                    </a>
                </div>
            </div>
        </div>

        <section class="figure">
            <div class="container">
                <div class="figure__vector-bl"></div>
                <div class="figure__vector-cof"></div>
                <div class="figure__vector-cof2"></div>
                <div class="figure__vector-f"></div>
                <div class="figure__vector-gr"></div>
                <div class="figure__vector-line"></div>
                <div class="figure__vector-pin"></div>
                <div class="figure__vector-red"></div>
    
                    <div class="figure__vector">
                        <img class="figure__vector-red1" src="/img/Vector-red.png" />
                        <img class="figure__vector-" src="/img/Vector-bl.png" />
                        <img class="figure__vector-red1" src="/img/Vector-pin.png" />
                        <img class="figure__vector-red1" src="/img/Vector-cof2.png" />
                        <img class="figure__vector-red1" src="/img/Vector-cof.png" />
                        <img class="figure__vector-red1" src="/img/Vector-gr.png" />
                        <img class="figure__vector-red1" src="/img/Vector-line.png" />
                        <img class="figure__vector-red1" src="/img/Vector-f.png" />

                    </div>
           
                </div>
        </section>
       
    </main>
  );
}

export default Aboutfund;
