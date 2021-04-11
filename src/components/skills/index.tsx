import {Element} from "react-scroll";
import React from "react";

interface Props {
    allTheme: any,
    Title: string,
    workName: string,
    darkTheme: any,
    content: string,
}

const Skills: React.FC<Props> = ({ allTheme, Title, workName , content}) => {
    return (
        <div className={allTheme.geralBox}>
            <h1 className={allTheme.boxTitle}>{Title}</h1>
            <p className={allTheme.bodyAboutMe}>&nbsp;&nbsp;{content}</p>
            <Element name={workName}>
            </Element>
        </div>
    )
}

export default Skills;
