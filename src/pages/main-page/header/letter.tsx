import styles from './header.module.scss'
import React from 'react'

export const Letter: React.FC<{
    text: string
    positionNum: number
}> = ({ text, positionNum }) => {
    const getRandomOneOrNegativeOne = () => (Math.random() < 0.5 ? -1 : 1)
    const getRandomUpToPositionNum = (cap: number) =>
        Math.round(Math.random() * cap)

    const animStyle = React.useMemo(() => {
        const maxOffset = Math.min(Math.max(positionNum, 0), 15)
        if (!maxOffset) return 'translate3d(0px, 0px, 0px)'
        const offset = () => getRandomOneOrNegativeOne() * getRandomUpToPositionNum(maxOffset)
        return `translate3d(${offset()}px, ${offset()}px, ${offset()}px)`
    }, [positionNum])

    return (
        <span className={styles.text} style={{ transform: animStyle }}>
            {text}
        </span>
    )
}
