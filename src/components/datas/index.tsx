import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import { Element } from 'react-scroll';

import PersonalLinks from "../personalLinks";
import { myLinks } from "../personalLinks/myLinks";
import Works from "../projects";
import Skills from "../skills";
import profilePhoto from "../../worksImages/profile.jpg";
import instagramQR from "../../worksImages/how.dev_nametag.png";
import { hardAndSoft } from "../skills/hardAndSoft";
import { Icons, FutureIcons } from "../icons";
import "./index.css";

export const Datas: React.FC = () => {
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
    const [allTheme, setAllTheme] = useState({
        primary: "HowardTitleEscuro",
        secondary: "link",
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
            const styleScroll: any = document.getElementById("scroll")
            styleScroll.innerHTML = "::-webkit-scrollbar-track {\n" +
                "        background-color: #9c8e85;\n" +
                "      }\n" +
                "      ::-webkit-scrollbar {\n" +
                "        width: 8px;\n" +
                "      }\n" +
                "      ::-webkit-scrollbar-thumb {\n" +
                "        background: #695b52;\n" +
                "      }"
            setAllTheme({
                primary: "HowardTitleClaro",
                secondary: "linkClaro",
                profilePhoto: "profilePhotoClaro",
                boxTitle: "boxTitleClaro",
                bodyAboutMe: "bodyAboutMeClaro",
                mySkills: "mySkillsClaro",
                geralBox: "geralBoxClaro",
                inferior: "inferiorClaro",
                inferiorTitle: "inferiorTitleClaro"
            })
        } else {
            const styleScroll: any = document.getElementById("scroll")
            styleScroll.innerHTML = "::-webkit-scrollbar-track {\n" +
                "        background-color: #2c403b;\n" +
                "      }\n" +
                "      ::-webkit-scrollbar {\n" +
                "        width: 8px;\n" +
                "      }\n" +
                "      ::-webkit-scrollbar-thumb {\n" +
                "        background: #0c1916;\n" +
                "      }"
            setAllTheme({
                primary: "HowardTitleEscuro",
                secondary: "link",
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
    const dateOfBirth = 2000
    const atualYear = new Date().getFullYear()

    return (
        <div className="dataBox">
            <img alt="profile" src={profilePhoto} className={allTheme.profilePhoto} />
            <h1 className={allTheme.primary}>Howard Ricardo</h1>
            <Element name="contacts">
                <span className={allTheme.primary}>HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Redux-Thunk, Python, Flask, SQL (Postgresql, MySQL), SQLAlchemy, Criptografia, POO, APIRESTFUL, Git, Scrum.</span>
            </Element>
            <Icons />
            <span className={allTheme.primary}>Este currículo foi feito com TypeScript, React e Redux.</span>

            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>Contatos:</h1>
                {myLinks.map((elt, index) => <PersonalLinks key={index} allTheme={allTheme} myLink={elt.myLink} Icon={elt.Icon} content={elt.content}/>)}
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
                    JavaScript. Tenho {atualYear - dateOfBirth} anos, super entusiasmado e muita vontade de aprender.
                    Apaixonado por projetos e trabalhos que envolvem liderança e um senso de empreendedorismo
                    muito forte. Sempre busco inovar e melhorar. Excelente comunicação e pensamento crítico.
                    Estudar & codar é o que eu mais amo fazer na minha vida.
                </p>
                <h3 style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}>Metas para o futuro: </h3>
                <Element name="hardskills">
                </Element>
                <p className={allTheme.bodyAboutMe}>
                    &nbsp;&nbsp; Hoje eu sou um Desenvolvedor Full-stack, mas estou em busca de
                    melhorar minhas stacks em Back-End. Estudando DJANGO, Ruby, Java, PHP e GraphQL.
                </p>
                <FutureIcons />
            </div>
            {hardAndSoft.map((elt, index) => <Skills key={index} allTheme={allTheme} darkTheme={darkTheme} Title={elt.Title} workName={elt.workName} content={elt.mySkills}/>)}
            <h1 className={allTheme.primary}>Trabalhos: </h1>
            <Works darkTheme={darkTheme} allTheme={allTheme} />
        </div>
    )
}
