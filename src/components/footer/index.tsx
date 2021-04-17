import React from "react";
import "./index.css";
import { Link } from 'react-scroll';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';

import { useSelector } from "react-redux";

export const Footer: React.FC = () => {
    const darkTheme = useSelector((state: {color: boolean}) => state.color);
    return (
        <div className={!darkTheme ? "footer" : "footerClaro"} >
            <div className="footerIn">
                <Link className={!darkTheme ? "item" : "itemClaro"} activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <VerticalAlignTopIcon />Ir ao topo
                </Link>
                <Link className={!darkTheme ? "item" : "itemClaro"}  activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                    <ContactsIcon />Contatos
                </Link>
                <Link className={!darkTheme ? "item" : "itemClaro"}  activeClass="active" to="hardskills" spy={true} smooth={true} duration={500}>
                    <PersonIcon /> HardSkills
                </Link>
            </div>
        </div>
    )
}
