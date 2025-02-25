import styles from './header.module.scss'
import React from 'react'

export const Letter: React.FC<{
    text: string
    positionNum: number
}> = ({ text, positionNum }) => {
    const getRandomOneOrNegativeOne = () => {
        return Math.random() < 0.5 ? -1 : 1
    }

    const getRandomUpToPositionNum = () => {
        return Math.round(Math.random() * positionNum)
    }

    const animStyle = positionNum
        ? `translate3d(
        ${getRandomOneOrNegativeOne() * getRandomUpToPositionNum()}px,
        ${getRandomOneOrNegativeOne() * getRandomUpToPositionNum()}px,
        ${getRandomOneOrNegativeOne() * getRandomUpToPositionNum()}px
        )`
        : `translate3d(0px, 0px, 0px)`

    return (
        <span className={styles.text} style={{ transform: animStyle }}>
            {text}
        </span>
    )
}
