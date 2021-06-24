import React from "react";
import {useParams} from "react-router";
import {WorkPage} from "./work-page";
import {Routes} from "../../routes";
import {projectsConfig} from "./projects-config";


export const WorksPageSelector = () => {
    const params: {id: Routes} = useParams();
    const projectData = projectsConfig[params.id];
    if(!projectData) return null;

    console.log(projectData)


    return <WorkPage {...projectData}/>
}

export interface IWorkPage {
    projectTitle: string;
    projectDescription: string;
    slides: string[];
    technologiesTitle: string;
    technologiesList: string[];
    contributionsToProjectList: string[];
    projectLink?: string;
}