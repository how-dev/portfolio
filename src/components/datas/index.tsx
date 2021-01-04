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
            <span style={{color: "#C0E0DE"}}>HTML, CSS, JavaScript, TypeScript, React, Redux-thunk, Git, Scrum</span>
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

        </div>
    )
}
