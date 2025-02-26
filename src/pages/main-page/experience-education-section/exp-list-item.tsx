import React, { useRef, useState } from 'react'
import { ExperienceConfigType } from './index.tsx'
import './experience-education-section.scss'
import { useIntersectionObserver } from '../../../hooks/use-intersection-observer'

const createMarkup = (html: string) => {
    return { __html: html }
}

let observer: IntersectionObserver | null = null

export const ExpListItem: React.FC<ExperienceConfigType> = ({
    companyName,
    workPeriod,
    workPosition,
    workDescription,
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const onObserver = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true)
            } else {
                setIsIntersecting(false)
            }
        })
    }

    useIntersectionObserver(ref, onObserver)

    return (
        <div className="experience__row line_anim" key={companyName}>
            <div className="experience__name">
                <h2>{companyName}</h2>
                <span>{workPeriod}</span>
            </div>
            <div className="experience__runner" ref={ref}>
                <div
                    className={
                        isIntersecting
                            ? 'experience__circle circle_grow_anim'
                            : 'experience__circle'
                    }
                ></div>
                <div
                    className={
                        isIntersecting
                            ? 'experience__line line_anim'
                            : 'experience__line'
                    }
                ></div>
            </div>
            <div className="experience__more">
                <h3>{workPosition}</h3>
                <p dangerouslySetInnerHTML={createMarkup(workDescription)}></p>
            </div>
        </div>
    )
}
