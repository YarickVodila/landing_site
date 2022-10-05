
import Name from "../img/Name.png";
import satellite from "../img/satellite.png";


import React, {Component} from "react"
import {Route, Routes} from "react-router-dom";





export default class Home extends Component{
    render() {
        return (
            <div>
                <main className={"container"}>
                    <section className={'container-info'}>
                        <img className={'name-logo'} src={Name}/>
                        <a href={'https://vk.com/wall-215278139_15'} className={'button accept-button'}>Принять участие</a>
                    </section>
                    <section className={'container-logo-satellite'}>
                        <img className={'satellite'} src={satellite}/>
                    </section>
                </main>

            </div>
        );
    }
}
/*
 <div id={'popup'} className={'popup'}>
                    <div className={'popup-body'}>
                        <div className={'popup-content'}>
                            <div className={'popup-close'}>
                                <a href={'#'} className={'button'}>Закрыть</a>
                            </div>

                            <div className={'form-content'}>
                                <p className={'form-description'}><b>Принять участие</b></p>
                                <form className="form" action="http://echo.htmlacademy.ru" method="post">
                                    <p>
                                        <label className="label-form" htmlFor="user-name">ФИО участника</label>
                                        <input className="user-name" id="user-name" type="text" name="name" placeholder="Иванов Иван Иванович"/>
                                    </p>

                                    <p>
                                        <label className="label-form" htmlFor="user-tel">Телефон</label>
                                        <input className="user-tel" id="user-tel" type="tel" name="tel"/>
                                    </p>

                                    <p>
                                        <label className="label-form" htmlFor="user-email">Электронная почта</label>
                                        <input className="user-email" id="user-email" type="email" name="email" placeholder={'sample@mail.ru'}/>
                                    </p>

                                    <p>
                                        <label className="label-form" htmlFor="user-team">Название команды</label>
                                        <input className="user-team" id="user-team" type="text" name="team" placeholder={'Укажите название вашей команды'}/>
                                    </p>

                                    <div className={'form-button'}>
                                        <button className="button" type="submit">Приянть участие</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
*/