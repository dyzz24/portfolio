import React, {useEffect, useRef, useState} from "react";
import style from './self-writing-text.module.scss';




 class TextIterationHandler {
        count = 0;
        currentText = '';
        stopWriteFlag = false;

        set setCount(arg: number) {
                this.count = arg;
        }
        set setCurrentText(arg: string) {
                this.currentText = arg;
        }
        set setStopWriteFlag(arg: boolean) {
                this.stopWriteFlag = arg;
        }

}

export const SelfWritingText: React.FC<{arrayOfStrings: string[]}> =
    ({arrayOfStrings}) => {
        const [textIterationInstance] = useState(new TextIterationHandler());
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
                        textIterationInstance.setCount = textIterationInstance.count + 1;
                        textIterationInstance.setStopWriteFlag = false;
                        writeText(arrayOfStrings);
                        return
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
                if (!textIterationInstance.stopWriteFlag) {
                        textIterationInstance.setCurrentText = arr[textIterationInstance.count]; // ставлю текущую стрингу из массива
                        textIterationInstance.setStopWriteFlag = true;
                }
                if(textIterationInstance.count ===  arr.length) {
                        clearTimeout(timeOutRef.current);
                        textIterationInstance.setCount = 0;
                        textIterationInstance.setStopWriteFlag = false;
                        writeText(arr);
                        return;
                }

                if(textIterationInstance.currentText.length === 0) {
                        timeOutRef.current = window.setTimeout(() => {
                                deleteLatestText(arr[textIterationInstance.count]);
                        }, 3000)
                        return;
                }

                timeOutRef.current = window.setTimeout(() => {
                        setText(prevState => {
                                prevState += textIterationInstance.currentText[0];
                                return prevState
                        });
                        textIterationInstance.setCurrentText = textIterationInstance.currentText.slice(1)
                        clearTimeout(timeOutRef.current);
                        writeText(arr)
                }, 100)


        }
        
        
        return <p className={style.added_span} ref={parentToInsert}><span>{text}</span><span className={style.line + ' ' + 'anim_span'}>|</span></p>
}