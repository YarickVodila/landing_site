import React, {Component} from "react"


export default class Cases extends Component{
    render() {
        return (
            <div>
                <main className={'cases-information'}>
                    <div className={'information'}>
                        <h1><b>Кейсы</b></h1>
                    </div>
                    <div className={'container'}>
                        <section className={'Case_1'}>
                            <h2><b>Мотив</b></h2>
                            <p>
                                Тута должен быть кейс, но я посчитал что программировать калькулятор важнее!
                                Писать необходимо строго на асемблере!!! Потом ясен хрен переделывать всё.
                                За это вы получите бесплатную симку Мегафона.
                            </p>
                        </section>
                        <section className={'Case_2'}>
                            <h2><b>Уралэнерготел</b></h2>
                            <p>
                                Задача отмыть деньги с предприятия и не попасться на глаза с помошью ИИ. Вам нужно взломать пентагон
                                Ну и ещё МКС.
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}
