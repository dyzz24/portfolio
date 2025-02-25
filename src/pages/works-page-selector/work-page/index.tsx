import React from "react";
import './work-page.scss';
import {Slider} from "../../../components/slider";
import {IWorkPage} from "../index";
import {BackToMain} from "../back-to-main";

export const WorkPage: React.FC<IWorkPage> = ({slides, projectTitle,
                                                  projectDescription,
                                                  technologiesTitle,
                                                  technologiesList,
                                              contributionsToProjectList,
                                                  projectLink}) => {
    return <section className='work__info'>
        <h2>{projectTitle}</h2>
        <p className="title">{projectDescription}</p>
        <Slider slides={slides}/>
        <h3>Используемые технологии</h3>

            <p className="main_text">
                {technologiesTitle}
            </p>
            <ul className="technology">
                {technologiesList.map(el => <li key={el}>{el}</li>)}
            </ul>
            <h3>Вклад в проект</h3>

        {contributionsToProjectList.map((el, idx) => <p key={idx} className="main_text">
            {el}
        </p>)}
        {projectLink && <>
            <h3>Достигнутые результаты</h3>

                <ul className="technology non_padd">
                    <li className='li_styles'>Ссылка на проект
                        <a className='link_btn' href={projectLink}
                           target="_blank"><span>{projectLink}</span></a>
                    </li>
                </ul>

        </>}
        <BackToMain/>
    </section>
}

