import React, {Component } from 'react';

import uralenergotel from "../img/Uralenergotel.jpg";
import Motiv from "../img/Motiv.jpg";

export default class Partners extends Component{
    render() {
        return (
            <div>
                <section className={"container-partners"}>
                    <section className={'information'}>
                        <h1><b>Партнёры</b></h1>
                    </section>
                    <section className={'Logos'}>
                        <img className={'partners-logo'} src={uralenergotel} width={200} height={200} alt={'Мотив'}/>
                        <img className={'partners-logo'} src={Motiv} width={200} height={200} alt={'Уралэнерготел'}/>
                    </section>
                </section>

            </div>
        );
    }
}
