import React from 'react'
import './skills.scss'
import { IWithRefChildren } from '../index'
import { SkillsListItem } from './skills-list-item.tsx'

export type SkillConfig = {
    name: string
    percent: number
}

const skillsConfig: SkillConfig[] = [
    {
        name: 'React / Next.js / Redux Toolkit',
        percent: 90,
    },
    {
        name: 'GraphQL (Apollo) / REST / WS',
        percent: 80,
    },
    {
        name: 'CSS-in-JS / SCSS / PostCSS',
        percent: 85,
    },
    {
        name: 'TypeScript',
        percent: 90,
    },
    {
        name: 'Angular 5+ / RxJS',
        percent: 70,
    },
    {
        name: 'Git / Vite / Webpack',
        percent: 70,
    },
]

export const Skills: React.FC<IWithRefChildren> = ({ refElement }) => {
    const orderedSkills = React.useMemo(
        () => [...skillsConfig].sort((a, b) => b.percent - a.percent),
        []
    )

    return (
        <section className="my_skills" ref={refElement}>
            <div className="all_skills">
                {orderedSkills.map((el) => (
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
