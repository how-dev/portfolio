import {Element} from "react-scroll";
import React from "react";
import CircularProgressWithLabel from "../circularProgress";

interface Props {
    allTheme: any,
    Title: string,
    mySkills: {name: string, skill: number}[],
    workName: string,
    darkTheme: any
}

const Skills: React.FC<Props> = ({ allTheme, darkTheme, Title, mySkills, workName }) => {
    return (
        <div className={allTheme.geralBox}>
            <h1 className={allTheme.boxTitle}>{Title}</h1>
            {mySkills.map((skill:{name: string, skill: number}, index: number) => (
                <div key={index}>
                    <div className={allTheme.mySkills} >
                        {skill.name}:<CircularProgressWithLabel variant="determinate" value={skill.skill} style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}}/>
                    </div><br />
                </div>
            ))}
            <Element name={workName}>
            </Element>
        </div>
    )
}

export default Skills;
