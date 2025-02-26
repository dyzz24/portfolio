import React from 'react'
import './experience-education-section.scss'

import { IWithRefChildren } from '../index'
import { ExpListItem } from './exp-list-item.tsx'

export type ExperienceConfigType = {
    companyName: string
    workPeriod: string
    workPosition: string
    workDescription: string
}

const experienceConfig: ExperienceConfigType[] = [
    {
        companyName: 'ООО ДомКлик, ПАО СБЕР',
        workPeriod: 'Ноябрь 2021 - настоящее время',
        workPosition: 'Senior Frontend Dev',
        workDescription: 'Разработка вэб-приложений',
    },
    {
        companyName: 'ООО Стрим, ПАО МТС',
        workPeriod: 'Февраль 2020 - Ноябрь 2021',
        workPosition: 'Frontend Dev',
        workDescription: 'Разработка вэб-приложений для ПАО МТС',
    },
    {
        companyName: 'АО «Крафтвэй корпорэйшн ПЛС»',
        workPeriod: 'Апрель 2019 - Февраль 2020',
        workPosition: 'Frontend Dev',
        workDescription: `<p>Разработка вэб-приложения с использованием &nbsp;Angular &nbsp;6 &nbsp;версии</p>
                                <p>Написание модулей приложения</p>
                                <p>Оптимизация приложения</p>
                                <p>Создание бизнес логики</p>`,
    },
    {
        companyName: 'ООО Инсат',
        workPeriod: 'Август 2018 - Апрель 2019',
        workPosition: 'Верстальщик / Frontend Dev',
        workDescription: `<p>Верстка и программирование сайтов компании по макетам из Figma&nbsp;и&nbsp;Photoshop.</p>
                        <p>Верстка интерфейса основного продукта компании – MasterScada&nbsp;4</p>
                        <p>Разработка клиентской части глобального проекта компании – CRM системы MasterCase на Angular&nbsp;7, работа в&nbsp;команде с&nbsp;
                            дизайнером и&nbsp;backend программистом
                        </p>`,
    },
    {
        companyName: 'SoftlogicRus',
        workPeriod: 'Май 2018 - август 2018',
        workPosition: 'Верстальщик / Frontend Dev',
        workDescription:
            'Верстка web-приложений компании, написание логики на JS, адаптация под мобильные устройства.',
    },
    {
        companyName: 'Фриланс',
        workPeriod: 'Март 2018 - май 2020',
        workPosition: 'Верстальщик',
        workDescription: 'Разработка сайтов на заказ',
    },
    {
        companyName: 'Нерелевантный опыт работы',
        workPeriod: '2014 - 2018',
        workPosition: '',
        workDescription: '',
    },
    {
        companyName: 'ИГХТУ',
        workPeriod: '2015 - 2018',
        workPosition: 'Студент',
        workDescription: 'Магистратура, Экономика фирмы и отраслевых рынков',
    },
    {
        companyName: 'ИвГПУ',
        workPeriod: '2009 - 2014',
        workPosition: 'Студент',
        workDescription: 'Бакалавриат, Технология текстильных изделий',
    },
]

export const ExperienceEducationSection: React.FC<IWithRefChildren> = ({
    refElement,
}) => {
    return (
        <section className="experience" ref={refElement}>
            {experienceConfig.map((el) => (
                <ExpListItem {...el} />
            ))}
        </section>
    )
}
