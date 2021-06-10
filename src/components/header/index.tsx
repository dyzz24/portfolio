import React, {createRef, useEffect, useMemo, useRef} from "react";
import styles from './header.module.scss';
import {generateId} from "../../utils/generate-id";

const firstRow = [
    {text: 'H'},
    {text: 'e'},
    {text: 'l'},
    {text: 'l'},
    {text: 'o'},
    {className: 'anim_span', text: '!'}
];

const secondRow = [{text: 'I'}, {text: ''}, {text: 'a'}, {text: 'm'}];
const thirdRow = [{text: 'V'},{text: 'a'},{text: 's'},{text: 'i'},{text: 'l'},{text: 'k'},{text: 'o'},{text: 'v'},
    {text: ''},{text: 'D'},{text: 'm'},{text: 'i'},{text: 't'},{text: 'r'},{text: 'y'},]

let counter = 0;
let increment = 1;
export const Header = () => {

    const headerRef = useRef<HTMLDivElement | null>(null);
    const firstRefsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
        () => Array.from({ length: 6 }).map(() => createRef()),
        []
    );
    const secondRefsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
        () => Array.from({ length: 4 }).map(() => createRef()),
        []
    );
    const thirdRefsCollection: Array<React.RefObject<HTMLDivElement>> = useMemo(
        () => Array.from({ length: 15 }).map(() => createRef()),
        []
    );

    const letterRefsCollection = [...firstRefsCollection, ...secondRefsCollection, ...thirdRefsCollection]

    const spanAnim = () => {
        if(!headerRef.current) return;
        const coordinateTop = headerRef.current.getBoundingClientRect().top;
        
        if (coordinateTop < 0) {
            if (counter < letterRefsCollection.length - 1) {
                counter++;
            } else {
                counter = 0;
            }

            makeAnim(counter, coordinateTop);
        }

        if (coordinateTop >= 0) {
            counter = 0;
            letterRefsCollection.forEach(el => {
                if(el.current) {
                    el.current.style.transform = 'translate3d(0px, 0px, 0px)'
                }
            })
        }
    }

    const  makeAnim = (count: number, topCoordinate: number) => {
        if (increment === 1) {
            increment = -1;
        } else {
            increment = 1;
        }

        if(letterRefsCollection[count].current) {
            // @ts-ignore
            letterRefsCollection[count].current.style.transform = `translate3d(
        ${increment * topCoordinate}px,
        ${topCoordinate}px,
        ${topCoordinate}px
        )`;
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", spanAnim);
        return () => window.removeEventListener("scroll", spanAnim);
    }, [])






    return <header id='start' ref={headerRef}>
        <div className={styles.span_classes}>
            {firstRow.map((el, idx) => <span ref={firstRefsCollection[idx]} className={el.className || ''} key={generateId(10)}>{el.text}</span>)}
        </div>

        <div className={styles.span_classes}>
            {secondRow.map((el, idx) => <span ref={secondRefsCollection[idx]} key={generateId(10)}>{el.text}</span>)}
        </div>

        <div className={styles.span_classes + ' ' + styles.colored}>
            {thirdRow.map((el, idx) => <span ref={secondRefsCollection[idx]} key={generateId(10)}>{el.text}</span>)}

        </div>
        <div className={styles.span_classes}>
            <span className='header_spans'>F</span>
            <span className='header_spans'>r</span>
            <span className='header_spans'>o</span>
            <span className='header_spans'>n</span>
            <span className='header_spans'>t</span>
            <span className='header_spans'>e</span>
            <span className='header_spans'>n</span>
            <span className='header_spans'>d</span>
            <span className='header_spans anim_span'>_</span>
            <span className='header_spans'>d</span>
            <span className='header_spans'>e</span>
            <span className='header_spans'>v</span>
            <span className='header_spans'>e</span>
            <span className='header_spans'>l</span>
            <span className='header_spans'>o</span>
            <span className='header_spans'>p</span>
            <span className='header_spans'>e</span>
            <span className='header_spans'>r</span>
        </div>
    </header>
}