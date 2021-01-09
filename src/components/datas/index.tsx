import React, {useEffect} from "react";
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

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import KenzieHub from "./worksImages/kenziehub.png";
import Pokedex from "./worksImages/pokedex.png";
import Conan from "./worksImages/conan.png";
import pythonLambda from "./worksImages/pythonLambda.png";
import hinodeReact from "./worksImages/hinodeReact.png";

import { Element } from 'react-scroll';
import {useSelector} from "react-redux";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'KenzieHub - React + Redux',
        imgPath: KenzieHub,
    },
    {
        label: 'Pokedex - React',
        imgPath: Pokedex,
    },
    {
        label: 'Conan - React + Redux + TypeScriptX (.tsx)',
        imgPath: Conan,
    },
    {
        label: 'Gráfico 2D de trajetória de partícula - Python',
        imgPath: pythonLambda,
    },
    {
        label: 'Site de produtos de beleza - React + Redux',
        imgPath: hinodeReact,
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 385,
        width: "90%",
        flexGrow: 1,
        marginTop: 20,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        background: "#3C474B",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        color: "#c0e0de",
        padding: "0 !important",
        justifyContent: "center",
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
}));

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
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
                <Typography variant="caption" component="div" style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}}>{`${Math.round(
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
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
    const [allTheme, setAllTheme] = React.useState({
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

    React.useEffect(() => {
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

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    return (
        <div className="dataBox">
            <img alt="profile" src={profilePhoto} className={allTheme.profilePhoto} />
            <h1 className={allTheme.primary}>Howard Ricardo</h1>
            <Element name="contacts">
                <span className={allTheme.primary}>HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Redux-Thunk, Git, Scrum</span>
            </Element>
            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>Contatos:</h1>
                <a className={allTheme.secondary} href="https://www.linkedin.com/in/how-dev/" rel="noreferrer" target="_blank"><LinkedInIcon/>Linkedin: @how-dev </a>
                <a className={allTheme.secondary} href="https://www.instagram.com/how.dev/" rel="noreferrer" target="_blank"><InstagramIcon/>Instagram: @how.dev</a>
                <a className={allTheme.secondary} href="https://www.facebook.com/howard.ricardo.9" rel="noreferrer" target="_blank"><FacebookIcon/>Facebook: Howard</a>
                <a className={allTheme.secondary} href="https://api.whatsapp.com/send?phone=5561983089950&text=Ol%C3%A1!%20Eu%20gostaria%20de%20falar%20sobre%20trabalho." rel="noreferrer" target="_blank"><WhatsAppIcon/>WhatsApp: (61) 98308-9950</a>
                <a className={allTheme.secondary} href="https://github.com/how-dev" rel="noreferrer" target="_blank"><GitHubIcon />Github: how-dev</a>
                <span className={allTheme.email} ><EmailIcon/>Email: howard@kenzie.com.br</span>
                <img alt="instagramQR" src={instagramQR} className="instagramQR" />
                <Element name="aboutMe">
                </Element>
            </div>
            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>Quem sou eu:</h1>
                <p className={allTheme.bodyAboutMe}>
                    &nbsp;&nbsp; Desde criança eu sempre fui apaixonado por programação e tecnologia.
                    Meu pai trabalha com computação e sempre me ensinou lógica de programação desde pequeno.
                    Aos 7 anos eu já programava jogos em RPG Maker VX/XP. Na minha adolescência, trabalhei
                    com amigos em jogos online inspirados em Habbo Hotel, que usávamos Flash, da Adobe, e C#.
                    Na vida adulta, ao entrar na faculdade de Engenharias, tive contato com Python, e logo com
                    JavaScript. Hoje eu tenho 20 anos, e minha especialidade é Desenvolvimento Web em React (principal)
                    , adaptável para Angular, Next e Vue.
                </p>
                <h3 className={allTheme.primary}>Metas para o futuro: </h3>
                <p className={allTheme.bodyAboutMe}>
                    &nbsp;&nbsp; Hoje eu sou um Desenvolvedor Front-End, mas eu estou em busca de me tornar um Full-Stack,
                    estudando Java, Python, DJANGO, Flask, MySQL, PHP, GraphQL e API REST.
                </p>
                <Element name="hardskills">
                </Element>
            </div>

            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>HardSkills:</h1>

                {hardSkills.map((skill:{name: string, skill: number}, index: number) => (
                    <div key={index}>
                        <div className={allTheme.mySkills} key={index}>
                            {skill.name}:&nbsp;&nbsp;<CircularProgressWithLabel variant="determinate" value={skill.skill} style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}}/>
                        </div><br/>
                    </div>
                ))}
                <Element name="softskills">
                </Element>
            </div>
            <div className={allTheme.geralBox}>
                <h1 className={allTheme.boxTitle}>SoftSkills:</h1>
                {softSkills.map((skill:{name: string, skill: number}, index: number) => (
                    <div key={index}>
                        <div className={allTheme.mySkills} >
                            {skill.name}:&nbsp;&nbsp;<CircularProgressWithLabel variant="determinate" value={skill.skill} style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}}/>
                        </div><br />
                    </div>
                ))}
                <Element name="works">
                </Element>
            </div>
            <h1 className={allTheme.primary}>Trabalhos: </h1>
            <div className={classes.root}>
                <Paper square elevation={0} className={allTheme.inferiorTitle}>
                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {tutorialSteps.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    className={allTheme.inferior}
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button style={!darkTheme ? {color: "#c0e0de"} : {color: "#c2b8b2"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        </div>
    )
}
