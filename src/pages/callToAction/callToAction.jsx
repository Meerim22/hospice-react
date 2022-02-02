import "./callToAction.scss";

function CallToAction() {
    return (
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
    );
}

export default CallToAction;