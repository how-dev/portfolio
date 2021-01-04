import React from "react";
import "./index.css";
import profilePhoto from "./profile.jpg";
import instagramQR from "./how.dev_nametag.png";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Datas: React.FC = () => {
    return (
        <div className="dataBox">
            <img alt="profile" src={profilePhoto} className="profilePhoto" />
            <h1 style={{color: "#C0E0DE"}}>Howard Ricardo</h1>
            <span style={{color: "#C0E0DE"}}>HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Redux-Thunk, Git, Scrum</span>
            <div className="contacts">
                <h1 style={{color: "#C0E0DE", margin: 0, marginBottom: 20}}>Contatos:</h1>
                <a className="link" href="https://www.linkedin.com/in/how-dev/" rel="noreferrer" target="_blank"><LinkedInIcon/>Linkedin: @how-dev </a>
                <a className="link" href="https://www.instagram.com/how.dev/" rel="noreferrer" target="_blank"><InstagramIcon/>Instagram: @how.dev</a>
                <a className="link" href="https://www.facebook.com/howard.ricardo.9" rel="noreferrer" target="_blank"><FacebookIcon/>Facebook: Howard</a>
                <a className="link" href="https://api.whatsapp.com/send?phone=5561983089950&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho." rel="noreferrer" target="_blank"><WhatsAppIcon/>WhatsApp: (61) 98308-9950</a>
                <a className="link" href="https://github.com/how-dev" rel="noreferrer" target="_blank"><GitHubIcon />Github: how-dev</a>
                <span className="linkEmail" ><EmailIcon/>Email: howard.medeiros@gmail.com</span>
                <img alt="instagramQR" src={instagramQR} className="instagramQR" />
            </div>
            <div className="aboutMe">
                <h1 style={{color: "#C0E0DE", margin: 0, marginBottom: 20}}>Quem sou eu:</h1>
                <p className="bodyAboutMe">
                    &nbsp;&nbsp; Desde criança eu sempre fui apaixonado por programação e tecnologia.
                    Meu pai trabalha com computação e sempre me ensinou lógica de programação desde pequeno.
                    Aos 7 anos eu já programava jogos em RPG Maker VX/XP. Na minha adolescência, trabalhei
                    com amigos em jogos online inspirados em Habbo Hotel, que usávamos Flash, da Adobe, e C#.
                    Na vida adulta, ao entrar na faculdade de Engenharias, tive contato com Python, e logo com
                    JavaScript. Hoje eu tenho 20 anos, e minha especialidade é Desenvolvimento Web em React (principal)
                    , Angular, Next e Vue.
                </p>
                <h3 style={{color: "#C0E0DE"}}>Metas para o futuro: </h3>
                <p className="bodyAboutMe">
                    &nbsp;&nbsp; Hoje eu sou um Desenvolvedor Front-End, mas eu estou em busca de me tornar um Full-Stack,
                    estudando Python, DJANGO, Flask, MySQL, PHP, GraphQL e API REST.
                </p>
            </div>
        </div>
    )
}
