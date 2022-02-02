import "./footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer class="footer">
		<div class="container">
			<div class="footer__inner">
				<div class="footer__inner__social-media-logo">
					<ul class="footer__inner__social-media-logo__inner">
						<li class="footer__inner__social-media-logo__inner__item">
							<a class="footer__inner__social-media-logo__inner__item__logo-link" href="index.html">
								<img class="footer__inner__social-media-logo__inner__item__logo-link__logo"
									src="./img/logo-footer.svg" alt="Первый Детский Хоспис" />
							</a>
						</li>
						<li class="footer__inner__social-media-logo__inner__item">
							<p class="footer__inner__social-media-logo__inner__item__hospice-descr">
								Общественный Благотворительный
								Фонд «Первый детский хоспис»
							</p>
						</li>
						<li class="footer__inner__social-media-logo__inner__item">
							<p class="footer__inner__social-media-logo__inner__item__sm-descr">Мы в социальных сетях:</p>
						</li>
						<li class="footer__inner__social-media-logo__inner__item">
							<a class="footer__inner__social-media-logo__inner__item__link " href="https://t.me/userName">
								<img class="footer__inner__social-media-logo__inner__item__link__img__telegram"
									src="./img/Telegram.svg" alt="Telegram" />
							</a>
							<a class="footer__inner__social-media-logo__inner__item__link " href="https://wa.me/+996700700700">
								<img class="footer__inner__social-media-logo__inner__item__link__img__whatsapp"
									src="./img/Whatsapp.svg" alt="Whatsapp" />
							</a>
							<a class="footer__inner__social-media-logo__inner__item__link "
								href="https://instagram.com/hospicekgz">
								<img class="footer__inner__social-media-logo__inner__item__link__img__instagram"
									src="./img/Instagram.svg" alt="Instagram" />
							</a>
							<a class="footer__inner__social-media-logo__inner__item__link"
								href="https://facebook.com/hospicekgz">
								<img class="footer__inner__social-media-logo__inner__item__link__img__facebook"
									src="./img/Facebook.svg" alt="Facebook" />
							</a>

						</li>
					</ul>
				</div>

				<div class="footer__inner__requisites-info-contact">
					<div class="footer__inner__requisites-info-contact__inner">
						<div class="footer__inner__requisites-info-contact__inner__requisites">
							<h3 class="footer__inner__requisites-info-contact__inner__title">Реквизиты</h3>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item footer__mb-unique">
								ОБФ "Первый детский хоспис"
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								ИНН 01502201610205

							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								ОКПО 29400184

							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								ОАО Банк «Бай Тушум»
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								KGS 1371040001440439
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								БИК 137001
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								Optima 4169615189595451
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								ЗАО "КИКБ"
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								Расчетный Счет KGS: 1280096037288596
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								БИК 128009
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								Элсом 0559647457
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								О деньги 0707040602
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								MegaPay 0559647457
							</p>
							<p class="footer__inner__requisites-info-contact__inner__requisites__item">
								PayPal <a class="footer__inner__requisites-info-contact__inner__requisites__item__PayPal-link"
									href="https://paypal.me/hospicekgz" target="_blank">https://paypal.me/hospicekgz</a>
							</p>
						</div>

						<div class="footer__inner__requisites-info-contact__inner__info">
							<h3 class="footer__inner__requisites-info-contact__inner__title">Информация</h3>

							<NavLink className="footer__inner__requisites-info-contact__inner__info__item" to="/">Главная</NavLink>
							<NavLink className="footer__inner__requisites-info-contact__inner__info__item" to="/aboutfund">О фонде</NavLink>
							<NavLink className="footer__inner__requisites-info-contact__inner__info__item" to="/wanthelp">Хочу
								помочь</NavLink>
							<NavLink className="footer__inner__requisites-info-contact__inner__info__item" to="/need-help">Нужна
								помощь</NavLink>
						</div>

						<div class="footer__inner__requisites-info-contact__inner__contact">
							<h3 class="footer__inner__requisites-info-contact__inner__title">Контакты</h3>
							<div class="footer__inner__requisites-info-contact__inner__contact__item  footer__mb-unique">
								<img class="footer__inner__requisites-info-contact__inner__contact__item__icon__location"
									src="./img/location.svg" alt="Location" />
								<p class="footer__inner__requisites-info-contact__inner__contact__item__location">г. Бишкек,
									бул. Молодой Гвардии 71а</p>
							</div>
							<div class="footer__inner__requisites-info-contact__inner__contact__item">
								<img class="footer__inner__requisites-info-contact__inner__contact__item__icon__email"
									src="./img/email.svg" alt="Email" />
								<a class="footer__inner__requisites-info-contact__inner__contact__item__email__text"
									href="mailto:childrenshospice.kg@gmail.com">childrenshospice.kg@gmail.com</a>
							</div>
							<div class="footer__inner__requisites-info-contact__inner__contact__item">
								<img class="footer__inner__requisites-info-contact__inner__contact__item__icon__phone"
									src="./img/phone.svg" alt="Phone Number" />
								<div class="footer__inner__requisites-info-contact__inner__contact__item__phone__numbers">
									<a class="footer__inner__requisites-info-contact__inner__contact__item__phone__numbers__item"
										href="tel:+996550050440">+996
										(550) 050440 </a>
									<a class="footer__inner__requisites-info-contact__inner__contact__item__phone__numbers__item"
										href="tel:+996559647457">+996
										(559) 647457</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
  );
}

export default Footer;
