import React from "react";
import "./index.css";
import { Link } from 'react-scroll';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div style={{color: "#C0E0DE", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around"}}>
                <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <VerticalAlignTopIcon />Ir ao topo
                </Link>
                <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                    <ContactsIcon />Contatos
                </Link>
                <Link style={{display: "flex", alignItems: "center", justifyContent: "center"}} activeClass="active" to="hardskills" spy={true} smooth={true} duration={500}>
                    <PersonIcon /> HardSkills
                </Link>
            </div>
        </div>
    )
}
