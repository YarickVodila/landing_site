import React, {Component } from 'react';
import map from "../img/Map.png";

export default class About extends Component{
    render() {
        return (
            <div>
               <section className={"container"}>
                   <section className={'information'}>
                       <h1><b>O Хакатоне</b></h1>
                       <div className={'text-about'}>
                            <p>
                                Хакатон связи — командное соревнование для студентов СибГУТИ, в рамках которого, участники
                                решают профильные комплексные задачи практической направленности от партнеров-предприятий телекоммуникационной отрасли.
                            </p>
                            <p>
                                Организатор хакатона УрТИСИ СибГУТИ в городе Екатеринбург.
                                Мероприятие проходит в гибридном формате с офлайн площадками вкаждом из филиалов СибГУТИ,
                                в городах Екатеринбург, Новосибирск, Улан-Удэ, Хабаровск.
                           </p>
                       </div>
                   </section>
                   <section className={'Map'}>
                        <img src={map} width={700} height={500}/>
                   </section>
               </section>

            </div>
        );
    }
}
