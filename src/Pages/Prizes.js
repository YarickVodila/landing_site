import React, {Component } from 'react';
import prize from "../img/Prize.png";

export default class Prizes extends Component{
    render() {
        return (
            <div>
                <section className={"container-prizes"}>
                    <section className={'information'}>
                        <h1><b>O Хакатоне</b></h1>
                    </section>
                    <section className={'prize-logo'}>
                        <img src={prize} width={700} height={190}/>
                    </section>
                </section>

            </div>
        );
    }
}
