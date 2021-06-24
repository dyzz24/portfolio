import React from "react";
import './about.scss';
import {SelfWritingText} from "../../../components/self-writing-text";
import {IWithRefChildren} from "../index";

export const AboutSection: React.FC<IWithRefChildren> = ({refElement}) => {

    const arrayOfStrings = [
        "Разрабатываю сложные WEB-приложения",
        "Использовал как React так и Angular 5+",
        "...TS, ES6, RxJs, websockets, REST API, redux, effector, webpack, gulp",
    ];

    return <section className='about' ref={refElement}>
        <h2>Обо мне</h2>
        <SelfWritingText arrayOfStrings={arrayOfStrings}/>
        <div className="about__wrapper">
            <div className="about__text">

                <div className="about__text_body">
                    <span className="line_l"></span>
                    <div className="text_block">
                        <span>За несколько лет практики я овладел технологиями, необходимыми для создания &nbsp;сложных web
                            приложений (SPA).</span>
                        <span>Пишу на современном react, активно использую хуки. Effector как state manager.</span>
                        <span>В настоящий момент работаю над клиенскими приложениями для компании МТС, в компании Стрим</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
}