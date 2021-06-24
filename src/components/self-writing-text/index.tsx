import React, {useEffect, useRef, useState} from "react";
import style from './self-writing-text.module.scss';


let count = 0; // начальный счетчик
let currentText = ""; // текущая строка из массива
let stopWriteFlag = false; // флаг для текущего текста
export const SelfWritingText: React.FC<{arrayOfStrings: string[]}> = ({arrayOfStrings}) => {
        const parentToInsert = useRef<HTMLParagraphElement | null>(null);
        const timeOutRef = useRef(0);
        const [text, setText] = useState<string>('');
        useEffect(() => {
                if(parentToInsert.current) {
                        writeText(arrayOfStrings);
                }
        }, [parentToInsert.current]);

        useEffect(() => {
                return () => clearTimeout(timeOutRef.current);
        }, [])


        const deleteLatestText = (text: string) => {
                clearTimeout(timeOutRef.current);
                const replacedString = text.replace(/.$/,"");
                if(text.length === 0) {
                        count++;
                        stopWriteFlag = false;
                        writeText(arrayOfStrings);
                }
                timeOutRef.current = window.setTimeout(() => {
                        setText(replacedString);
                        clearTimeout(timeOutRef.current);
                        deleteLatestText(replacedString);
                }, 50)
        }
        

        
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
                                deleteLatestText(arr[count]);
                        }, 3000)
                        return;
                }

                timeOutRef.current = window.setTimeout(() => {
                        setText(prevState => {
                                prevState += currentText[0];
                                return prevState
                        });
                        currentText = currentText.slice(1);
                        clearTimeout(timeOutRef.current);
                        writeText(arr)
                }, 100)


        }
        
        
        return <p className={style.added_span} ref={parentToInsert}><span>{text}</span><span className={style.line + ' ' + 'anim_span'}>|</span></p>
}