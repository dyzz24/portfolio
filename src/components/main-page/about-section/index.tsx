import React from "react";
import './about.scss';

export const AboutSection = () => {
    return <section className='about' id='about_me'>
        <h2>Обо мне</h2>
        <p className='added_span'><span className='line anim_span'>|</span></p>
        <div className="about__wrapper">
            <div className="about__text">

                <div className="about__text_body">
                    <span className="line_l"></span>
                    <div className="text_block">
                        <p>За несколько лет практики я овладел технологиями, необходимыми для создания &nbsp;сложных web
                            приложений (SPA).</p>
                        <p>Пишу на современном react, активно использую хуки. Effector как state manager.</p>
                        <p>В настоящий момент работаю над клиенскими приложениями для компании МТС, в компании Стрим</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}