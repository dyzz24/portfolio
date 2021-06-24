import React from "react";
import './works.scss';
import {Link} from 'react-router-dom';
import {IWithRefChildren} from "../index";
import {Routes} from "../../../routes";


const worksConfig = [
    {
    activeTitle: 'Выпущен в прод',
    name: 'Музыкальный сервис GOOD\'OK от МТС',
    linkTo: Routes.GOODOK,
    addingClassName: 'goodok'
},
    {
        activeTitle: 'Запущена beta версия',
        name: 'MVP версия игры Мир клиента',
        linkTo: Routes.CLIENT_WORLD,
        addingClassName: 'cw'
    },
    {
        name: 'SPA (angular 6) Global System Monitoring',
        linkTo: Routes.GSM,
        addingClassName: 'gsm'
    },
    {
        activeTitle: 'Рабочий прототип',
        name: 'Модуль почты + модуль авторизации CRM Системы MasterCase',
        linkTo: 'ff',
        addingClassName: 'msc'
    },
    {
        name: 'Сайт презентация основного продукта компании - MasterScada',
        linkTo: 'ff',
        addingClassName: 'mscd'
    },
    {
        name: 'Партнерский сайт компании Kingdy',
        linkTo: 'ff',
        addingClassName: 'kngd'
    },
    {
        name: 'Сайт презентация продукта MasterOPC',
        linkTo: 'ff',
        addingClassName: 'msopc'
    },
    {
        name: 'Верстка прототипа приложения Masterscada 4',
        linkTo: 'ff',
        addingClassName: 'proto'
    },
    {
        name: 'Сайт проекта musicshop',
        linkTo: 'ff',
        addingClassName: 'musicshop'
    },
    {
        name: 'Сайт по монтажу инженерных систем и коммуникаций',
        linkTo: 'ff',
        addingClassName: 'active'
    },
]

export const Works:  React.FC<IWithRefChildren>  = ({refElement}) => {
    return <section className='work_section' ref={refElement}>
        {
            worksConfig.map(el =>
                <div className={"work__prev " + el.addingClassName} key={el.addingClassName}>
                    {el.activeTitle && <div className="work_title active">{el.activeTitle}</div>}
                    <div className="work_tech_block">
                        <p>{el.name}</p>
                    </div>
                    {el.linkTo && <Link to={el.linkTo} className="work_btn btn_bottom"><span>Подробнее</span></Link>}
                    {el.linkTo && <Link to={el.linkTo} className='prev_link'></Link>}
                </div>
            )
        }

    </section>
}