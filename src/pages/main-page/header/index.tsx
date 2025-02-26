import React, { useEffect } from 'react'
import styles from './header.module.scss'

import { IWithRefChildren } from '../index'

import { Letter } from './letter.tsx'
const conf = ['Hello!', 'I am', 'Vasilkov Dmitrii', 'Frontend developer']

export const Header: React.FC<IWithRefChildren> = ({ refElement }) => {
    const [count, setCount] = React.useState(0)

    const spanAnim = () => {
        if (!refElement.current) return
        const { top, bottom, height } =
            refElement.current.getBoundingClientRect()

        if (top < 0) {
            const calculated = Math.round(100 - (bottom * 100) / height)
            setCount(calculated * 2)
        }

        if (top >= 0) {
            setCount(0)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', spanAnim)
        return () => window.removeEventListener('scroll', spanAnim)
    }, [])

    return (
        <header id="start" ref={refElement} data-render={true}>
            {conf.map((row, idx) => (
                <div className={styles.span_classes} key={idx}>
                    {row.split('').map((el, idx) => (
                        <Letter text={el} key={idx + el} positionNum={count} />
                    ))}
                </div>
            ))}
        </header>
    )
}
