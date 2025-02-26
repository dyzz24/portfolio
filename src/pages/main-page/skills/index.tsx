import React, { createRef, useContext, useEffect, useMemo } from 'react'
import './skills.scss'
import { IWithRefChildren } from '../index'
import { SkillsListItem } from './skills-list-item.tsx'

export type SkillConfig = {
    name: string
    percent: number
}

const skillsConfig: SkillConfig[] = [
    {
        name: 'React / Next.JS / Redux',
        percent: 90,
    },
    {
        name: 'GraphQL Apollo / RestAPI / WS',
        percent: 80,
    },
    {
        name: 'CssInJs / SCSS / PCSS ',
        percent: 85,
    },
    {
        name: 'TS',
        percent: 90,
    },
    {
        name: 'Angular 5+ / RXJS',
        percent: 70,
    },
    {
        name: 'Git / Vite / WebPack',
        percent: 70,
    },
]

export const Skills: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="my_skills" ref={refElement}>
            <div className="all_skills">
                {skillsConfig
                    .sort((a, b) => b.percent - a.percent)
                    .map((el, idx) => (
                        <SkillsListItem {...el} key={el.name} />
                    ))}
            </div>
            <div className="right_skills_block">
                <div className="graph_triangle triangle_anim">
                    <div className="side html5"></div>
                    <div className="side ang"></div>
                    <div className="side js"></div>
                    <div className="side css3"></div>
                </div>
            </div>
        </section>
    )
}
