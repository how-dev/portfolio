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
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" style={{color: "#c0e0de"}}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

interface Skills {
    name: string;
    skill: number;
}

const hardSkills: Skills[] = [
    {name: "HTML5", skill: 100},
    {name: "CSS3", skill: 90},
    {name: "JavaScript (ES6+)", skill: 90},
    {name: "TypeScript", skill: 85},
    {name: "React", skill: 100},
    {name: "Redux-Thunk", skill: 80},
    {name: "Git", skill: 80},
    {name: "Responsive", skill: 95},
    {name: "Atomic Design", skill: 80},
    {name: "Scrum", skill: 75},
    {name: "Linux", skill: 85},
    {name: "Trello", skill: 80},
    {name: "Notion", skill: 75},
    {name: "Slack", skill: 100},
    {name: "Angular", skill: 50},
    {name: "NextJS", skill: 40},
    {name: "VueJS", skill: 55},
]

const softSkills: Skills[]  = [
    {name: "Liderança", skill: 100},
    {name: "Confiança", skill: 100},
    {name: "Pontualidade", skill: 100},
    {name: "Iniciativa", skill: 100},
    {name: "Empatia", skill: 100},
    {name: "Bom Humor", skill: 100},
    {name: "Organização", skill: 100},
    {name: "Maturidade", skill: 100},
    {name: "Resiliência", skill: 95},
    {name: "Paciência", skill: 100},
]

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
                    , adaptável para Angular, Next e Vue.
                </p>
                <h3 style={{color: "#C0E0DE"}}>Metas para o futuro: </h3>
                <p className="bodyAboutMe">
                    &nbsp;&nbsp; Hoje eu sou um Desenvolvedor Front-End, mas eu estou em busca de me tornar um Full-Stack,
                    estudando Java, Python, DJANGO, Flask, MySQL, PHP, GraphQL e API REST.
                </p>
            </div>
            <div className="hardSkills">
                <h1 style={{color: "#C0E0DE", margin: 0, marginBottom: 20}}>HardSkills:</h1>
                {hardSkills.map((skill:{name: string, skill: number}, index: number) => (
                    <p className="mySkills" key={index}>
                        {skill.name}:&nbsp;&nbsp;<CircularProgressWithLabel variant="determinate" value={skill.skill} style={{color: "#c0e0de"}}/>
                    </p>
                ))}
            </div>
            <div className="softSkills">
                <h1 style={{color: "#C0E0DE", margin: 0, marginBottom: 20}}>SoftSkills:</h1>
                {softSkills.map((skill:{name: string, skill: number}, index: number) => (
                    <p className="mySkills" key={index}>
                        {skill.name}:&nbsp;&nbsp;<CircularProgressWithLabel variant="determinate" value={skill.skill} style={{color: "#c0e0de"}}/>
                    </p>
                ))}
            </div>

        </div>
    )
}
