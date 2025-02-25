import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { WorkPage } from './work-page'
import { Routes } from '../../routes'
import { projectsConfig } from './projects-config'
import { PreloaderStore } from '../../store/preloader-store'
import { usePreloader } from '../../hooks/use-preloading'

export const WorksPageSelector = () => {
    const params: { id: Routes } = useParams()
    const projectData = projectsConfig[params.id]
    const { dispatch } = useContext(PreloaderStore)
    usePreloader(dispatch)

    if (!projectData) return null
    return <WorkPage {...projectData} />
}

export interface IWorkPage {
    projectTitle: string
    projectDescription: string
    slides: string[]
    technologiesTitle: string
    technologiesList: string[]
    contributionsToProjectList: string[]
    projectLink?: string
}
