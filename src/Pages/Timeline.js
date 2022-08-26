import React, {Component} from "react"

import timelogo from "../img/Timeline.png";


export default class Timeline extends Component{
    render() {
        return (
            <div>
                <main className={'timeline-information'}>
                    <div className={'information'}>
                        <h1><b>Таймлайн</b></h1>
                    </div>
                    <section className={"time-logo"}>
                        <img className={'Logo-time'} src={timelogo} width={600} height={450}/>
                    </section>
                </main>
            </div>
        );
    }
}
