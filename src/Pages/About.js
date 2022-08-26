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
                                <span>Хакатон связи</span> — командное соревнование для студентов СибГУТИ и филиалов,
                                в результате которого участники смогут решить профильные задачи от институтов.
                            </p>
                            <p>
                               Мероприятие проходит в гибридном формате с офлайн площадкой
                               на базе <span>УрТИСИ СибГУТИ</span> в городе Екатеринбург.
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
