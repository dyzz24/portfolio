import React from 'react'
import './works.scss'
import { Link } from 'react-router-dom'
import { IWithRefChildren } from '../index'
import { Routes } from '../../../routes'
import goodokLabel from '../../../img/goodok.jpg'
import cwmtsLabel from '../../../img/cw_title.png'
import gsmLabel from '../../../img/gsm.jpg'
import msc from '../../../img/mastercase.jpg'
import masterscada from '../../../img/masterscada.jpg'
import kngdy from '../../../img/kingdy.jpg'
import mpoc from '../../../img/masteropc.jpg'
import header from '../../../img/header.jpg'
import laptop from '../../../img/laptop.webp'
import { FRRImg } from '../../../components/FRRImg'
import investing from '../../../img/investing.png'
import softek from '../../../img/softek.png'

const worksConfig = [
    {
        activeTitle: 'React, TS, GraphQL',
        name: 'Access Digital® Banking',
        linkTo: '',
        labelImg: softek,
    },
    {
        activeTitle: 'React, TS',
        name: 'Online platform for DomClick partners',
        linkTo: '',
        labelImg: laptop,
    },
    {
        activeTitle: 'React, TS, GraphQL',
        name: 'COMPAS 2.0 (crm system) DomClick',
        linkTo: '',
        labelImg: laptop,
    },
    {
        activeTitle: 'NEXT.JS, prototype',
        name: "A tool for assessing the investment attractiveness of a company's shares",
        externalReference:
            'https://investing-next-js.vercel.app/company-profile/AAPL',
        labelImg: investing,
    },
    {
        activeTitle: 'NEXT.js - released, production',
        name: "GOOD'OK music service from MTS",
        linkTo: Routes.GOODOK,
        labelImg: goodokLabel,
    },
    {
        activeTitle: 'Beta version - released',
        name: 'MVP Clients World',
        linkTo: Routes.CLIENT_WORLD,
        labelImg: cwmtsLabel,
    },
    {
        activeTitle: 'Angular 6, RXJs',
        name: 'SPA (angular 6) Global System Monitoring',
        linkTo: Routes.GSM,
        labelImg: gsmLabel,
    },
    {
        activeTitle: 'SRM System MasterCase',
        name: 'Mail module + authorization module of CRM System MasterCase',
        linkTo: Routes.CRM_SYSTEM,
        labelImg: msc,
    },
    {
        name: "Website presentation of the company's main product - MasterScada",
        linkTo: '',
        labelImg: masterscada,
    },
    {
        name: "Kingdy's partner site",
        linkTo: '',
        labelImg: kngdy,
    },
    {
        name: 'MasterOPC product presentation site',
        linkTo: '',
        labelImg: mpoc,
    },
    {
        name: 'Website for installation of engineering systems and communications',
        linkTo: '',
        labelImg: header,
        externalReference: 'http://engineer37.ru/',
    },
]

export const Works: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="work_section" ref={refElement}>
            <div className={'workWrapper'}>
                {worksConfig.map((el) => (
                    <div className={'work__prev'} key={el.name}>
                        <FRRImg src={el.labelImg as string} />
                        {el?.activeTitle && (
                            <div className="work_title active">
                                {el?.activeTitle}
                            </div>
                        )}
                        <div className="work_tech_block">
                            <p>{el.name}</p>
                        </div>
                        {el?.linkTo && (
                            <Link
                                to={el.linkTo}
                                className="work_btn btn_bottom"
                            >
                                <span>More</span>
                            </Link>
                        )}
                        {el?.linkTo && (
                            <Link to={el.linkTo} className="prev_link"></Link>
                        )}
                        {el?.externalReference && (
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
    )
}
