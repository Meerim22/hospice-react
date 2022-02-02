import "./historyfund.scss";

function Historyfund() {
  return (
    <main class="main">
      <div class="container">
        <div class="breadcrumb">
          <a class="breadcrumb__item-link" href="index.html">Главная</a>
          <span>
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.158203 8.825L3.97487 5L0.158203 1.175L1.3332 0L6.3332 5L1.3332 10L0.158203 8.825Z"
                fill="#616161" />
            </svg>
          </span>
          <a class="breadcrumb__item-link" href="#">О фонде</a>
          <span>
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.158203 8.825L3.97487 5L0.158203 1.175L1.3332 0L6.3332 5L1.3332 10L0.158203 8.825Z"
                fill="#616161" />
            </svg>
          </span>
          <span class="breadcrumb__item-currant">История создания фонда</span>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div class="box-history">
          <section class="blc-history">
            <h1 class="blc-history__title">История создания фонда</h1>
            <div class="blc-history__descr">
              <img class="blc-history__img" src="./img/history_img.png" alt="photo" />
              <p class="blc-history__text">Благотворительный фонд «Первый Детский Хоспис» помогает детям с тяжелыми
                неизлечимыми заболеваниями с 2003 года. За семнадцатилетнюю историю работы Первый Детский Хоспис
                прошел путь от небольшого основанного по инициативе Ольги Трухановой, до организации, построившей
                первый детский хоспис в Кыргызстане и способствующей развитию служб паллиативной медицинской помощи
                в центре. Благотворительный фонд «Первый Детский Хоспис» помогает детям с тяжелыми неизлечимыми
                заболеваниями с 2003 года. За семнадцатилетнюю историю работы Первый Детский Хоспис прошел путь от
                небольшого благотворительного фонда, основанного по инициативе</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Historyfund;
