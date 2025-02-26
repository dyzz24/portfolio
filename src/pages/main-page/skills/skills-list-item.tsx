import React, { useRef, useState } from 'react'
import './skills.scss'
import { SkillConfig } from './index.tsx'
import { useIntersectionObserver } from '../../../hooks/use-intersection-observer'

export const SkillsListItem = ({ name, percent }: SkillConfig) => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

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
        <div className="skills_row" ref={ref}>
            <div className="name">{name}</div>
            <div className="progress_bar">
                <div
                    className="fill"
                    style={
                        isIntersecting
                            ? { width: percent + '%' }
                            : { width: '0%' }
                    }
                ></div>
            </div>
            <span>{percent + '%'}</span>
        </div>
    )
}
