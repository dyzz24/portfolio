import React from "react";
import './work-page.scss';
import {Slider} from "../../slider";

export const WorkPage = () => {
    return <section className='work__info'>
        <Slider slides={['aa', 'bb']}/>
    </section>
}

interface IWorkPage {
    projectTitle: string;
    projectDescription: string;
}