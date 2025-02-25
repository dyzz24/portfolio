import React, { createRef, useContext, useEffect, useMemo } from 'react'
import styles from './header.module.scss'
import { generateId } from '../../../utils/generate-id'
import { IWithRefChildren } from '../index'
import {
    PreloaderStore,
    PreloaderStoreAction,
} from '../../../store/preloader-store'
import { useHandleBackgroundOnLoad } from '../../../hooks/use-handle-background-on-load'
import headerBg from '../../../img/header.jpg'

const firstRow = [
    { text: 'H' },
    { text: 'e' },
    { text: 'l' },
    { text: 'l' },
    { text: 'o' },
    { className: 'anim_span', text: '!' },
]

const secondRow = [{ text: 'I' }, { text: '' }, { text: 'a' }, { text: 'm' }]
const thirdRow = [
    { text: 'V' },
    { text: 'a' },
    { text: 's' },
    { text: 'i' },
    { text: 'l' },
    { text: 'k' },
    { text: 'o' },
    { text: 'v' },
    { text: '' },
    { text: 'D' },
    { text: 'm' },
    { text: 'i' },
    { text: 't' },
    { text: 'r' },
    { text: 'y' },
]

const fourthRow = [
    { text: 'F' },
    { text: 'r' },
    { text: 'o' },
    { text: 'n' },
    { text: 't' },
    { text: 'e' },
    { text: 'n' },
    { text: 'd' },
    { text: '_', className: 'anim_span' },
    { text: 'd' },
    { text: 'e' },
    { text: 'v' },
    { text: 'e' },
    { text: 'l' },
    { text: 'o' },
    { text: 'p' },
    { text: 'e' },
    { text: 'r' },
]

let counter = 0
let increment = 1
export const Header: React.FC<IWithRefChildren> = ({ refElement }) => {
    const firstRefsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
        () => Array.from({ length: 6 }).map(() => createRef()),
        []
    )
    const secondRefsCollection: Array<React.RefObject<HTMLDivElement>> =
        useMemo(() => Array.from({ length: 4 }).map(() => createRef()), [])
    const thirdRefsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
        () => Array.from({ length: 15 }).map(() => createRef()),
        []
    )
    const fourthRefsCollection: Array<React.RefObject<HTMLDivElement>> =
        useMemo(() => Array.from({ length: 18 }).map(() => createRef()), [])

    const letterRefsCollection = [
        ...firstRefsCollection,
        ...secondRefsCollection,
        ...thirdRefsCollection,
        ...fourthRefsCollection,
    ]

    const spanAnim = () => {
        if (!refElement.current) return
        const coordinateTop = refElement.current.getBoundingClientRect().top
        const coordinateBottom =
            refElement.current.getBoundingClientRect().bottom

        if (coordinateBottom < 100) return

        if (coordinateTop < 0) {
            if (counter < letterRefsCollection.length - 1) {
                counter++
            } else {
                counter = 0
            }

            makeAnim(counter, coordinateTop)
        }

        if (coordinateTop >= 0) {
            counter = 0
            letterRefsCollection.forEach((el) => {
                if (el.current) {
                    el.current.style.transform = 'translate3d(0px, 0px, 0px)'
                }
            })
        }
    }

    const makeAnim = (count: number, topCoordinate: number) => {
        if (increment === 1) {
            increment = -1
        } else {
            increment = 1
        }

        if (letterRefsCollection[count].current) {
            // @ts-ignore
            letterRefsCollection[count].current.style.transform = `translate3d(
        ${increment * topCoordinate}px,
        ${topCoordinate}px,
        ${topCoordinate}px
        )`
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', spanAnim)
        return () => window.removeEventListener('scroll', spanAnim)
    }, [])

    const { dispatch } = useContext(PreloaderStore)
    useHandleBackgroundOnLoad([headerBg], () =>
        dispatch({ type: PreloaderStoreAction.SAFE_SRR_LOADED_RESOURCE })
    )

    return (
        <header id="start" ref={refElement} data-render={true}>
            <div className={styles.span_classes}>
                {firstRow.map((el, idx) => (
                    <span
                        ref={firstRefsCollection[idx]}
                        className={el.className || ''}
                        key={generateId(10)}
                    >
                        {el.text}
                    </span>
                ))}
            </div>

            <div className={styles.span_classes}>
                {secondRow.map((el, idx) => (
                    <span ref={secondRefsCollection[idx]} key={generateId(10)}>
                        {el.text}
                    </span>
                ))}
            </div>

            <div className={styles.span_classes + ' ' + styles.colored}>
                {thirdRow.map((el, idx) => (
                    <span ref={thirdRefsCollection[idx]} key={generateId(10)}>
                        {el.text}
                    </span>
                ))}
            </div>
            <div className={styles.span_classes}>
                {fourthRow.map((el, idx) => (
                    <span
                        ref={fourthRefsCollection[idx]}
                        className={el.className || ''}
                        key={generateId(10)}
                    >
                        {el.text}
                    </span>
                ))}
            </div>
        </header>
    )
}
