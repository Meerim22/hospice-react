import "./application.scss";

function Application() {
    return (
        <main class="application">
            <section class="application__main-txt">
            <div class="container">
                <div class="application__main-txt__inner">
                    <h3 class="application__main-txt__inner__title">Получить помощь</h3>
                    <p class="application__main-txt__inner__paragraphs">Важно помнить и понимать, что хоспис не
                        занимается лечением основного заболевания или реабилитаций.
                    </p>
                    <p class="application__main-txt__inner__paragraphs">Наши задачи — это симптоматическая терапия и
                        забота о качестве жизни ребенка и всей его семьи. Паллиативная помощь — специализированный вид
                        услуг для детей, чье заболевание не поддается лечению и ограничивает срок жизни детским
                        возрастом.</p>
                    <p class="application__main-txt__inner__paragraphs">Направление в хоспис должен дать лечащий врач в
                        лечебном учреждении, где ребенок получал основное лечение. К сожалению, многие медики в нашей
                        стране не знают про хоспис, и семьям приходится искать помощи самостоятельно. В Детском хосписе
                        существует медицинская комиссия, которая рассматривает новые обращения и принимает решение о
                        постановке на учет на основании следующих критериев отбора пациентов:</p>
                    <p class="application__main-txt__inner__paragraphs">— Онкология в 4 стадии после решения консилиума
                        об инкурабельности, либо в случае, когда ребенок становится глубоко инвалидизирован в процессе
                        лечения;
                    </p>
                    <p class="application__main-txt__inner__paragraphs">— СМА 1 и 2 типа, мышечная дистрофия Дюшенна и
                        другие тяжелые формы мышечные дистрофии в стадии, когда ребенок нуждается в респираторной или
                        двигательной поддержке;</p>
                    <p class="application__main-txt__inner__paragraphs">— Тяжелые системные и генетические заболевания;
                    </p>
                    <p class="application__main-txt__inner__paragraphs">— Тяжелые формы органического поражения ЦНС,
                        злокачественная эпилепсия.</p>
                    <p class="application__main-txt__inner__paragraphs">А также:</p>
                    <p class="application__main-txt__inner__paragraphs">— Заболевания, ограничивающие срок жизни детским
                        возрастом;</p>
                    <p class="application__main-txt__inner__paragraphs">— Наличие нескольких стом (гастростома,
                        трахеостома, шунт);</p>
                    <p class="application__main-txt__inner__paragraphs">— Потребность в длительной респираторной
                        поддержке;</p>
                    <p class="application__main-txt__inner__paragraphs">— Состояние комы, сопора.</p>
                    <p class="application__main-txt__inner__paragraphs">Хотим отдельно отметить, что Детский хоспис не
                        принимает на учет детей с ДЦП, если у ребенка нет дополнительных осложнений (см.
                        вышеперечисленные критерии).</p>
                    <p class="application__main-txt__inner__paragraphs">Хоспис работает с пациентами от 0 до 21 года.
                    </p>
                    <p class="application__main-txt__inner__paragraphs">Чтобы отправить заявку на постановку на учет в
                        Детский хоспис, необходимо заполнить Анкету.</p>
                    <p class="application__main-txt__inner__paragraphs">Анкета будет обработана сотрудниками фонда в
                        течение 5 рабочих дней. При необходимости сотрудник фонда свяжется с вами для дополнительных
                        уточнений.</p>
                    <p class="application__main-txt__inner__paragraphs">Отправляя данное обращение, вы даете согласие на
                        обработку, хранение и использование конфиденциальной информации, приведенной в обращении, в т.ч.
                        на предоставление данной информации медицинским экспертам фонда для получения их экспертного
                        мнения.</p>

                    <div class="application__main-txt__bg-circle__large"></div>
                    <div class="application__main-txt__bg-circle__medium"></div>
                    <div class="application__main-txt__bg-circle__small"></div> 
                </div>
            </div>
        </section>
        
        <form class="application__form">
            <div class="container">
                <div class="application__form__inner">
                    <div class="application__form__inner__item application__form__inner__item-mbuniq">
                        <label class="application__form__inner__item__labels" for="fullName">1.ФИО пациента
                            (полностью)</label>
                        <input class="application__form__inner__item__inputs" type="text" id="fullName" name="fullName"
                            required placeholder="ФИО" />
                    </div>

                    <div class="application__form__inner__item">
                        <label class="application__form__inner__item__labels" for="yourAge">2. Ваш
                            возраст</label>
                        <input class="application__form__inner__item__inputs" type="text" id="yourAge" name="yourAge"
                            required placeholder="18" />
                    </div>

                    <div class="application__form__inner__item">

                        <label class="application__form__inner__item__labels">3. Помощь, необходимая пациенту:</label>

                        <div class="application__form__inner__item__elements application__form__inner__item-mbuniq">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="provisionMedicines" name="help" required />

                            <label class="application__form__inner__item__labels__help"
                                for="provisionMedicines">Обеспечение
                                лекарствами
                                и/или расходными материалами</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="examinationFee" name="help" required />
                            <label class="application__form__inner__item__labels__help" for="examinationFee">Оплата
                                обследования
                                или
                                лечения КТ, МРТ, облучения и т.п.</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="paymentProsthetics" name="help" required />
                            <label class="application__form__inner__item__labels__help" for="paymentProsthetics">Оплата
                                протезирования/
                                эндпротезирования </label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="paymentOther" name="help" required />
                            <label class="application__form__inner__item__labels__help" for="paymentOther">Оплата
                                другого
                                лечения
                                или обследования заграницей</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="accommodation Outpatient" name="help" required />
                            <label class="application__form__inner__item__labels__help"
                                for="accommodation Outpatient">Проживание в
                                амбулаторной
                                комнате</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="other" name="help" required /> 
                            <label class="application__form__inner__item__labels__help" for="other">Другое</label>
                        </div>
                    </div>

                    <div class="application__form__inner__item">
                        <label class="application__form__inner__item__labels" for="accurateDiagnosis"> </label>
                        <label class="application__form__inner__item__labels" for="accurateDiagnosis">4. Точный диагноз
                            (как указано в выписке)*</label>
                        <input class="application__form__inner__item__inputs" type="text" id="accurateDiagnosis"
                            name="accurateDiagnosis" required placeholder="4. Точный диагноз (как указано в выписке)" />
                    </div>
                    <div class="application__form__inner__item">
                        <label class="application__form__inner__item__labels" for="accurateDiagnosis"> </label>
                        <label class="application__form__inner__item__labels" for="accurateDiagnosis">5. Текст обращения
                            в хоспис*</label>
                        <input class="application__form__inner__item__inputs" type="text" id="accurateDiagnosis"
                            name="accurateDiagnosis" required placeholder="4. Текст обращения в хоспис*" />
                    </div>
                    <div class="application__form__inner__item">

                        <label class="application__form__inner__item__labels">6. Статус обращающегося лица:</label>

                        <div class="application__form__inner__item__elements application__form__inner__item-mbuniq">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="provisionMedicines" name="help" required />

                            <label class="application__form__inner__item__labels__help"
                                for="provisionMedicines">Мама</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="paymentOther" name="help" required />
                            <label class="application__form__inner__item__labels__help" for="paymentOther">Отец</label>
                        </div>

                        <div class="application__form__inner__item__elements">
                            <input class="application__form__inner__item__inputs__accurateDiagnosis" type="radio"
                                id="other" name="help" required />
                            <label class="application__form__inner__item__labels__help" for="other">Законный </label>
                        </div>
                    </div>
                    <div class="application__form__inner__item">
                        <label class="application__form__inner__item__labels" for="yourPhone">7. Контактный телефон лица,
                            обращающегося за помощью*</label>
                        <input class="application__form__inner__item__inputs" type="tel" id="yourPhone" name="yourPhone"
                            required placeholder="Укажите ваш Контактный номер" />
                    </div>
                    <div class="application__form__inner__item">
                        <label class="application__form__inner__item__labels" for="yourEmail">8. Адрес электронной почты
                            обращающегося за помощью*</label>
                        <input class="application__form__inner__item__inputs" type="email" id="yourEmail" name="yourEmail"
                            required placeholder="Укажите ваш email" />
                    </div>
                </div> 
            </div>  
            <button id="btn" type="submit">Отправить</button> 
        </form>
        </main>
    );
}

export default Application;