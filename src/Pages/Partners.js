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
                            <img className={'partners-logo'} src={Motiv} width={250} height={50} alt={'Мотив'}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={iut} width={250} height={50} alt={''}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={uralenergotel} width={100} height={100} alt={'Уралэнерготел'}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={energoit} width={100} height={100} alt={''}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                        <section className={'About-partners'}>
                            <img className={'partners-logo'} src={grchc} width={100} height={100} alt={''}/>
                            <p>
                                Телекоммуникационная группа Мотив – ведущий инфраструктурный оператор связи в Уральском
                                Федеральном округе. Сайт компании https://motivtelecom.ru/
                            </p>
                        </section>
                    </section>
                </section>

            </div>
        );
    }
}
