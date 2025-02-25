import React from 'react';
import './works.scss';
import { Link } from 'react-router-dom';
import { IWithRefChildren } from '../index';
import { Routes } from '../../../routes';
import goodokLabel from '../../../img/goodok.jpg';
import cwmtsLabel from '../../../img/cw_title.png';
import gsmLabel from '../../../img/gsm.jpg';
import msc from '../../../img/mastercase.jpg';
import masterscada from '../../../img/masterscada.jpg';
import kngdy from '../../../img/kingdy.jpg';
import mpoc from '../../../img/masteropc.jpg';
import protoPwa from '../../../img/masterscada_pwa.jpg';
import musicShop from '../../../img/musicshop.jpg';
import header from '../../../img/header.jpg';
import { FRRImg } from '../../../components/FRRImg';
import investing from '../../../img/investing.png';

const worksConfig = [
  {
    activeTitle: 'React, TS (in progress)',
    name: 'Онлайн поддержка партнеров компании Domclick',
    linkTo: '',
    labelImg: header,
  },
  {
    activeTitle: 'React, TS, GraphQL (in progress)',
    name: 'COMPAS 2.0 (crm system) Domclick',
    linkTo: '',
    labelImg: header,
  },
  {
    activeTitle: 'NEXT.JS, prototype',
    name: 'Инструмент оценки инвестиционной привлекательности акций компании',
    externalReference:
      'https://investing-next-js.vercel.app/company-profile/AAPL',
    labelImg: investing,
  },
  {
    activeTitle: 'NEXT.js - выпущен в прод',
    name: "Музыкальный сервис GOOD'OK от МТС",
    linkTo: Routes.GOODOK,
    labelImg: goodokLabel,
  },
  {
    activeTitle: 'Запущена beta версия',
    name: 'MVP версия игры Мир клиента',
    linkTo: Routes.CLIENT_WORLD,
    labelImg: cwmtsLabel,
  },
  {
    name: 'SPA (angular 6) Global System Monitoring',
    linkTo: Routes.GSM,
    labelImg: gsmLabel,
  },
  {
    activeTitle: 'Рабочий прототип',
    name: 'Модуль почты + модуль авторизации CRM Системы MasterCase',
    linkTo: Routes.CRM_SYSTEM,
    labelImg: msc,
  },
  {
    name: 'Сайт презентация основного продукта компании - MasterScada',
    linkTo: '',
    labelImg: masterscada,
  },
  {
    name: 'Партнерский сайт компании Kingdy',
    linkTo: '',
    labelImg: kngdy,
    externalReference: 'http://kingdy.ru/',
  },
  {
    name: 'Сайт презентация продукта MasterOPC',
    linkTo: '',
    labelImg: mpoc,
    externalReference: 'http://www.masteropc.ru/',
  },
  {
    name: 'Верстка прототипа приложения Masterscada 4',
    linkTo: '',
    labelImg: protoPwa,
  },
  {
    name: 'Сайт проекта musicshop',
    linkTo: '',
    labelImg: musicShop,
  },
  {
    name: 'Сайт по монтажу инженерных систем и коммуникаций',
    linkTo: '',
    labelImg: header,
    externalReference: 'http://engineer37.ru/',
  },
];

export const Works: React.FC<IWithRefChildren> = ({ refElement }) => {
  return (
    <section className="work_section" ref={refElement}>
      <div className={'workWrapper'}>
        {worksConfig.map((el) => (
          <div className={'work__prev'} key={el.name}>
            <FRRImg src={el.labelImg} />
            {el.activeTitle && (
              <div className="work_title active">{el.activeTitle}</div>
            )}
            <div className="work_tech_block">
              <p>{el.name}</p>
            </div>
            {el.linkTo && (
              <Link to={el.linkTo} className="work_btn btn_bottom">
                <span>Подробнее</span>
              </Link>
            )}
            {el.linkTo && <Link to={el.linkTo} className="prev_link"></Link>}
            {el.externalReference && (
              <a
                href={el.externalReference}
                target={'_blank'}
                className="work_btn btn_bottom"
                rel="noreferrer"
              >
                <span>{el.externalReference}</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
