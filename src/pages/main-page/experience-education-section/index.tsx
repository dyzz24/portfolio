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
        companyName: 'AccessSoftek INC',
        workPeriod: 'August 2022 – Present',
        workPosition: 'Senior Frontend Developer',
        workDescription: 'Building and optimizing React and GraphQL banking web apps for enterprise clients.',
    },
    {
        companyName: 'DomClick LLC, Sber PJSC',
        workPeriod: 'November 2021 – July 2022',
        workPosition: 'Senior Frontend Developer',
        workDescription: 'Delivered React-based customer and partner portals with performance and UX improvements.',
    },
    {
        companyName: 'Stream LLC, MTS PJSC',
        workPeriod: 'February 2020 – November 2021',
        workPosition: 'Frontend Developer',
        workDescription: 'Built web applications for MTS digital products with a focus on reliability and UI quality.',
    },
    {
        companyName: 'Kraftway Corporation PLC',
        workPeriod: 'April 2019 – February 2020',
        workPosition: 'Frontend Developer',
        workDescription:
            '<p>Developed Angular 6 application modules.</p><p>Implemented business logic and optimized performance.</p><p>Collaborated on feature delivery and code quality.</p>',
    },
    {
        companyName: 'Insat LLC',
        workPeriod: 'August 2018 – April 2019',
        workPosition: 'Markup Developer / Frontend Developer',
        workDescription:
            "<p>Delivered pixel-perfect layouts from Figma and Photoshop.</p><p>Built interfaces for the MasterScada 4 product.</p><p>Implemented Angular 7 frontend for the MasterCase CRM with designers and backend engineers.</p>",
    },
    {
        companyName: 'SoftlogicRus',
        workPeriod: 'May 2018 – August 2018',
        workPosition: 'Markup Developer / Frontend Developer',
        workDescription:
            'Created responsive web layouts and JavaScript interactions for multiple client projects.',
    },
    {
        companyName: 'Freelance',
        workPeriod: 'March 2018 – May 2020',
        workPosition: 'Markup Developer',
        workDescription: 'Built custom websites end-to-end for small businesses.',
    },
    {
        companyName: 'Early Career',
        workPeriod: '2014 – 2018',
        workPosition: 'Various roles',
        workDescription: 'Non-IT roles (excluded from focus).',
    },
    {
        companyName:
            'Ivanovo State University of Chemistry and Technology (IGKhTU)',
        workPeriod: '2015 – 2018',
        workPosition: 'Student',
        workDescription:
            'Master’s Degree in Firm Economics and Industry Markets.',
    },
    {
        companyName: 'Ivanovo State Polytechnic University (IvGPU)',
        workPeriod: '2009 – 2014',
        workPosition: 'Student',
        workDescription: 'Bachelor’s Degree in Textile Technology.',
    },
]

export const ExperienceEducationSection: React.FC<IWithRefChildren> = ({
    refElement,
}) => {
    return (
        <section className="experience" ref={refElement}>
            {experienceConfig.map((el) => (
                <ExpListItem {...el} key={`${el.companyName}-${el.workPeriod}`} />
            ))}
        </section>
    )
}
