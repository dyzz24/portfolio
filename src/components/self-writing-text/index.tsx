import React, {useEffect, useRef, useState} from "react";
import style from './self-writing-text.module.scss';


let count = 0; // начальный счетчик
let currentText = ""; // текущая строка из массива
let stopWriteFlag = false; // флаг для текущего текста
export const SelfWritingText: React.FC<{arrayOfStrings: string[]}> = ({arrayOfStrings}) => {
        const parentToInsert = useRef<HTMLParagraphElement | null>(null);
        const timeOutRef = useRef(0);
        const [text, setText] = useState<string[]>([]);
        useEffect(() => {
                if(parentToInsert.current) {
                        writeText(arrayOfStrings);
                }
        }, [parentToInsert.current]);
        

        
        const writeText = (arr: string[]) => {
                const parent = parentToInsert.current;

                if(!parent) return;
                if (!stopWriteFlag) {
                        currentText = arr[count]; // ставлю текущую стрингу из массива
                        stopWriteFlag = true; // блокирую последующую вставку
                }
                if(count ===  arr.length) {
                        clearTimeout(timeOutRef.current);
                        count = 0;
                        stopWriteFlag = false;
                        writeText(arr);
                        return;


                }

                if(currentText.length === 0) {
                        timeOutRef.current = window.setTimeout(() => {
                                setText([]);
                                count++;
                                stopWriteFlag = false;
                                clearTimeout(timeOutRef.current);
                                writeText(arr);
                        }, 3000)
                        return;
                }

                timeOutRef.current = window.setTimeout(() => {
                        setText(prevState => [...prevState, currentText[0]]);
                        currentText = currentText.slice(1);
                        clearTimeout(timeOutRef.current);
                        writeText(arr)
                }, 100)


        }
        
        
        return <p className={style.added_span} ref={parentToInsert}>{text.map((el, idx) => <span key={idx} className={el === ' ' ? style.empty : ''}>{el}</span>)}<span className={style.line + ' ' + 'anim_span'}>|</span></p>
}