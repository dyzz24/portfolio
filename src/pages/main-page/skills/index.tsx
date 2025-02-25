import React, { createRef, useContext, useEffect, useMemo } from 'react'
import './skills.scss'
import { useUnobserve } from '../../../hooks/use-unobserve'
import { IWithRefChildren } from '../index'
import {
    PreloaderStore,
    PreloaderStoreAction,
} from '../../../store/preloader-store'
import { useHandleBackgroundOnLoad } from '../../../hooks/use-handle-background-on-load'
import tsPng from '../../../img/ts.png'
import reactPng from '../../../img/react.png'
import angularPng from '../../../img/angular.png'
import jsPng from '../../../img/ts.png'

const skillsConfig = [
    {
        name: 'React / Redux / Effector',
        percent: 85,
    },
    {
        name: 'STYLED COMPONENTS / SCSS',
        percent: 85,
    },
    {
        name: 'JS / TS',
        percent: 80,
    },
    {
        name: 'Angular 5+ / RXJS',
        percent: 60,
    },
    {
        name: 'Git / Gulp / WebPack',
        percent: 70,
    },
    {
        name: 'ES6+',

        percent: 85,
    },
]

let observer: IntersectionObserver | null = null
export const Skills: React.FC<IWithRefChildren> = ({ refElement }) => {
    const refSkillElementsCollection: Array<React.RefObject<HTMLDivElement>> =
        useMemo(
            () =>
                Array.from({ length: skillsConfig.length }).map(() =>
                    createRef()
                ),
            []
        )

    useUnobserve(refSkillElementsCollection, observer)

    const { dispatch } = useContext(PreloaderStore)
    useHandleBackgroundOnLoad([tsPng, angularPng, reactPng, jsPng], () =>
        dispatch({ type: PreloaderStoreAction.SAFE_SRR_LOADED_RESOURCE })
    )

    useEffect(() => {
        if (refSkillElementsCollection.length) {
            if (!!window.IntersectionObserver) {
                observer = new IntersectionObserver(
                    (entries, observer) => {
                        entries.forEach((entry, idx) => {
                            if (entry.isIntersecting) {
                                const percent =
                                    entry.target.getAttribute('data-percent')
                                requestAnimationFrame(() => {
                                    const target =
                                        entry.target as HTMLDivElement
                                    target.style.width = percent + '%'
                                })
                            } else {
                                requestAnimationFrame(() => {
                                    const target =
                                        entry.target as HTMLDivElement
                                    target.style.width = '0%'
                                })
                            }
                        })
                    },
                    { rootMargin: '0px 0px -100px 0px' }
                )
                refSkillElementsCollection.forEach((parentElement) => {
                    if (parentElement.current) {
                        observer?.observe(parentElement.current)
                    }
                })
            }
        }
    }, [refSkillElementsCollection.length])

    return (
        <section className="my_skills" ref={refElement}>
            <div className="all_skills">
                {skillsConfig
                    .sort((a, b) => b.percent - a.percent)
                    .map((el, idx) => (
                        <div className="skills_row" key={el.name}>
                            <div className="name">{el.name}</div>
                            <div className="progress_bar">
                                <div
                                    className="fill"
                                    data-percent={el.percent}
                                    ref={refSkillElementsCollection[idx]}
                                ></div>
                            </div>
                            <span>{el.percent + '%'}</span>
                        </div>
                    ))}
            </div>
            <div className="right_skills_block">
                <div className="graph_triangle triangle_anim">
                    <div className="side html5" data-render={true}></div>
                    <div className="side ang" data-render={true}></div>
                    <div className="side js" data-render={true}></div>
                    <div className="side css3" data-render={true}></div>
                </div>
            </div>
        </section>
    )
}
