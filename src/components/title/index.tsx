import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import "./index.css"
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import WorkIcon from '@material-ui/icons/Work';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';

import { Link, Element } from 'react-scroll';
import {useDispatch, useSelector} from "react-redux";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { changeTheme } from "../../store/modules/themeColor/action";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const Title: React.FC = () => {
    let darkTheme = useSelector((state: {color: boolean}) => state.color);
    const [pageTheme, setPageTheme] = React.useState("escuro")

    const dispatch = useDispatch();
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const root = document.getElementById('root')
    if (darkTheme) {
        // @ts-ignore
        root.classList.remove("mudatemaEscuro")
        // @ts-ignore
        root.classList.add("mudatemaClaro");
    } else {
        // @ts-ignore
        root.classList.remove("mudatemaClaro")
        // @ts-ignore
        root.classList.add("mudatemaEscuro");
    }

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const sun = <Brightness5Icon />
    const moon = <NightsStayIcon />
    const [dark, changeDark] = React.useState({checkedA: true,});
    const [label, changeLabel] = React.useState({icon: moon, state: "moon"})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeDark({ ...dark, [event.target.name]: event.target.checked });
        if (label.state === "moon") {
            changeLabel({icon: sun, state: "sun"})
        } else {
            changeLabel({icon: moon, state: "moon"})
        }
        dispatch(changeTheme(dark.checkedA))
        if (!darkTheme) {
            setPageTheme("claro")
        } else {
            setPageTheme("escuro")
        }
    };

    const PurpleSwitch = withStyles({
        switchBase: {
            color: '#C2B8B2',
            '&$checked': {
                color: '#204B57'
            },
            '&$checked + $track': {
                backgroundColor: '#00c1f8',
            },
        },
        checked: {},
        track: {},
    })(Switch);

    const Lista = (anchor: Anchor) => {
        const darkTheme = useSelector((state: {color: boolean}) => state.color);
        return (
            <div
                className={clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                })}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >

                <h1 style={!darkTheme ? {textAlign: "center", color: "#C0E0DE"} : {textAlign: "center", color: "#C2B8B2"}}>Sumário:</h1>
                <Link activeClass="active" to="contacts" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon><ContactsIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                            <ListItemText primary="Contatos" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
                <Link activeClass="active" to="aboutMe" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>

                            <ListItemIcon><FaceIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>

                            <ListItemText primary="Quem sou eu" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
                <Link activeClass="active" to="hardskills" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon><PersonIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                            <ListItemText primary="HardSkills" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
                <Link activeClass="active" to="softskills" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon><NaturePeopleIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                            <ListItemText primary="SoftSkills" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon><WorkIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                            <ListItemText primary="Trabalhos" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
                <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <List>
                        <ListItem button onClick={toggleDrawer(anchor, false)}>
                            <ListItemIcon><VerticalAlignTopIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                            <ListItemText primary="Ir ao topo" style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                        </ListItem>
                    </List>
                </Link>
            </div>
        )
    }



    return (
        <>
            <div className={pageTheme}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <FormControlLabel
                        style={{marginLeft: 20, color: "#C0E0DE"}} control={<PurpleSwitch checked={dark.checkedA} onChange={handleChange} name="checkedA" />}
                        label={label.icon}
                    />
                    <Button onClick={toggleDrawer("right", true)}><DehazeIcon style={{color: "white"}}/></Button>
                </div>
                <h1>Desenvolvedor React</h1>
                <Drawer classes={!darkTheme ? { paper: "drawer" } : {paper: "drawerClaro"}} anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {Lista("right")}
                </Drawer>
            </div>
            <Element name="top">
                <div style={{height: 100}}/>
            </Element>
        </>
    );
}
