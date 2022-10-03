import React, {Component } from 'react';
import prize from "../img/Prize2.png";
import merch from "../img/Tshirt.jpg"

export default class Prizes extends Component{
    render() {
        return (
            <div>
                <section className={"container-prizes"}>
                    <section className={'information'}>
                        <h1><b>O Хакатоне</b></h1>
                    </section>
                    <section className={'prize-logo'}>
                        <img src={prize} width={800} height={350}/>
                    </section>
                    <section className={'merch'}>
                        <p>
                            И конечно каждый участник получит по фирменной футболке
                        </p>
                        <img src={merch} width={700} height={450}/>

                    </section>
                </section>

            </div>
        );
    }
}
