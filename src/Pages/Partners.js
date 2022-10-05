import React, {Component } from 'react';

import uralenergotel from "../img/uralenergotel.png";
import Motiv from "../img/motiv.png";
import energoit from "../img/EnergoIT.png";
import grchc from "../img/GRCHC.png";
import iut from "../img/IUT.png";

export default class Partners extends Component{
    render() {
        return (
            <div>
                <section className={"container-partners"}>
                    <section className={'information'}>
                        <h1><b>Партнёры</b></h1>
                    </section>
                    <section className={'Logos'}>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={grchc} width={100} height={100} alt={''}/>
                            <p>
                                Филиал ФГУП «ГРЧЦ» в УрФО - обеспечение надлежащего использования радиочастот и радиочастотных каналов,
                                радиоэлектронных средств и (или) высокочастотных устройств гражданского назначения, экспертиза и мониторинг соблюдения законодательства
                                , участие в предоставлении государственных услуг. Сайт компании https://grfc.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={iut} width={250} height={50} alt={''}/>
                            <p>
                                АО "ИскраУралТЕЛ" – полный цикл проектирования, производства, реализации и
                                поддержки передовых интегрированных решений для операторов, транспортных компаний,
                                общественной безопасности, электроэнергетики и нефтегазовой отрасли. Сайт компании https://www.iskrauraltel.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={uralenergotel} width={100} height={100} alt={'Уралэнерготел'}/>
                            <p>
                                ООО "Уралэнерготел" – инженерная компания, выполняющая работы на всей территории Российской Федерации, а также в странах ближнего зарубежья.
                                Уралэнерготел оказывает полный комплекс услуг по созданию таких высокотехнологичных систем как: системы связи, автоматизированные системы управления,
                                автоматизированные системы учета теплоэнерго-ресурсов, системы мониторинга и диспетчеризации. Компания также выполняет строительные работы, разработку
                                и внедрение инженерных систем.
                                Сайт компании https://www.uetel.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={Motiv} width={250} height={50} alt={'Мотив'}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={energoit} width={100} height={100} alt={''}/>
                            <p>
                                ООО «Энерго Ай Ти» - проектирование, строительство, техническое обслуживание волоконно-оптических линий связи.
                                Сайт компании энергоайти.рф
                            </p>
                        </section>

                    </section>
                </section>

            </div>
        );
    }
}
