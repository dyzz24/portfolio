import React from "react";
import {useParams} from "react-router";
import {WorkPage} from "./work-page";

export const WorksPageSelector = () => {
    const params: {id: string} = useParams();

    return <WorkPage/>
}