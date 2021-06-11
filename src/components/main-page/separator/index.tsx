import React from "react";

export const Separator: React.FC<{text: string}> = ({text}) => {
    return <div className="separator">
        <h2>{text}</h2>
    </div>
}