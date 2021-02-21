import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import EmailIcon from "@material-ui/icons/Email"
import { Element } from 'react-scroll';

import PersonalLinks from "../personalLinks";
import { myLinks } from "../personalLinks/myLinks";
import Works from "../projects";
import Skills from "../skills";
import profilePhoto from "./profile.jpg";
import instagramQR from "./how.dev_nametag.png";
import { hardAndSoft } from "../skills/hardAndSoft";
import { Icons, FutureIcons } from "../icons";
import "./index.css";

export const Datas: React.FC = () => {
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
    const [allTheme, setAllTheme] = useState({
        primary: "HowardTitleEscuro",
        secondary: "link",
        email: "linkEmail",
        profilePhoto: "profilePhoto",
        boxTitle: "boxTitle",
        bodyAboutMe: "bodyAboutMe",
        mySkills: "mySkills",
        geralBox: "geralBox",
        inferior: "inferior",
        inferiorTitle: "inferiorTitle"
    })

    useEffect(() => {
        if (darkTheme) {
            setAllTheme({
                primary: "HowardTitleClaro",
                secondary: "linkClaro",
                email: "linkEmailClaro",
                profilePhoto: "profilePhotoClaro",
                boxTitle: "boxTitleClaro",
                bodyAboutMe: "bodyAboutMeClaro",
                mySkills: "mySkillsClaro",
                geralBox: "geralBoxClaro",
                inferior: "inferiorClaro",
                inferiorTitle: "inferiorTitleClaro"
            })
        } else {
            setAllTheme({
                primary: "HowardTitleEscuro",
                secondary: "link",
                email: "linkEmail",
                profilePhoto: "profilePhoto",
                boxTitle: "boxTitle",
                bodyAboutMe: "bodyAboutMe",
                mySkills: "mySkills",
                geralBox: "geralBox",
                inferior: "inferior",
                inferiorTitle: "inferiorTitle"
            })
        }
    }, [darkTheme])


    return (
        <div className="dataBox">
            <img alt="profile" src={profilePhoto} className={allTheme.profilePhoto} />
            <h1 className={allTheme.primary}>Howard Ricardo</h1>
            <Element name="contacts">
                <span className={allTheme.primary}>HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Redux-Thunk, Git, Scrum</span>
            </Element>
            <Icons />
            <span className={allTheme.primary}>Este currículo foi feito com TypeScript, React e Redux.</span>
            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>Contatos:</h1>
                {myLinks.map((elt, index) => <PersonalLinks key={index} allTheme={allTheme} myLink={elt.myLink} Icon={elt.Icon} content={elt.content}/>)}
                <span className={allTheme.email} ><EmailIcon/>Email: howard@kenzie.com.br</span>
                <a href="https://www.instagram.com/how.dev/" rel="noreferrer" target="_blank" style={{alignSelf: "center"}}><img alt="instagramQR" src={instagramQR} className="instagramQR" /></a>
                <Element name="aboutMe">
                </Element>
            </div>
            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>Quem sou eu:</h1>
                <p className={allTheme.bodyAboutMe}>
                    &nbsp;&nbsp; Desde criança eu sempre fui apaixonado por programação e tecnologia.
                    Meu pai trabalha com computação e sempre me ensinou lógica de programação desde pequeno.
                    Aos 10 anos eu já programava jogos em RPG Maker VX/XP. Na minha adolescência, trabalhei
                    com amigos em jogos online inspirados em Habbo Hotel, que usávamos Flash, da Adobe, e C#.
                    Na vida adulta, ao entrar na faculdade de Engenharias, tive contato com Python, e logo com
                    JavaScript. Hoje eu tenho 20 anos, e minha especialidade é Desenvolvimento Web em React (principal)
                    , adaptável para Angular, Next e Vue.
                </p>
                <h3 style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}>Metas para o futuro: </h3>
                <p className={allTheme.bodyAboutMe}>
                    &nbsp;&nbsp; Hoje eu sou um Desenvolvedor Front-End, mas eu estou em busca de me tornar um Full-Stack,
                    estudando Java, Python, DJANGO, Flask, MySQL, PHP, GraphQL e Ruby.
                </p>
                <Element name="hardskills">
                </Element>
                <FutureIcons />
            </div>
            {hardAndSoft.map((elt, index) => <Skills key={index} allTheme={allTheme} darkTheme={darkTheme} Title={elt.Title} mySkills={elt.mySkills} workName={elt.workName}/>)}
            <h1 className={allTheme.primary}>Trabalhos: </h1>
            <Works darkTheme={darkTheme} allTheme={allTheme} />
        </div>
    )
}
