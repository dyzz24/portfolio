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
        workDescription: 'Development of web applications.',
    },
    {
        companyName: 'DomClick LLC, Sber PJSC',
        workPeriod: 'November 2021 – July 2022',
        workPosition: 'Senior Frontend Developer',
        workDescription: 'Development of web applications.',
    },
    {
        companyName: 'Stream LLC, MTS PJSC',
        workPeriod: 'February 2020 – November 2021',
        workPosition: 'Frontend Developer',
        workDescription: 'Development of web applications for MTS PJSC.',
    },
    {
        companyName: 'Kraftway Corporation PLC',
        workPeriod: 'April 2019 – February 2020',
        workPosition: 'Frontend Developer',
        workDescription:
            '<p>Development of a web application using Angular 6.</p> <p>Implementation of application modules.</p> <p>Application optimization.</p> <p>Creation of business logic.</p>',
    },
    {
        companyName: 'Insat LLC',
        workPeriod: 'August 2018 – April 2019',
        workPosition: 'Markup Developer / Frontend Developer',
        workDescription:
            "<p>Website layout and development based on Figma and Photoshop designs.</p> <p>Interface layout for the company's main product, MasterScada 4.</p> <p>Frontend development for the company's large-scale project – the MasterCase CRM system on Angular 7, working collaboratively with a designer and backend developers.</p>",
    },
    {
        companyName: 'SoftlogicRus',
        workPeriod: 'May 2018 – August 2018',
        workPosition: 'Markup Developer / Frontend Developer',
        workDescription:
            'Development of web application layouts, JavaScript logic implementation, and mobile responsiveness adaptation.',
    },
    {
        companyName: 'Freelance',
        workPeriod: 'March 2018 – May 2020',
        workPosition: 'Markup Developer',
        workDescription: 'Custom website development.',
    },
    {
        companyName: 'Irrelevant Work Experience',
        workPeriod: '2014 – 2018',
        workPosition: '',
        workDescription: '',
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
                <ExpListItem {...el} />
            ))}
        </section>
    )
}
