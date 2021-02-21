import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DehazeIcon from '@material-ui/icons/Dehaze';
import "./index.css"

import { Element } from 'react-scroll';
import { useSelector} from "react-redux";
import CustomizedSwitches from "./switch"

import { theItems } from "./myItens/theItens";
import MyItens from "./myItens";

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
                {theItems.map((elt, index) => <MyItens key={index} darkTheme={darkTheme} anchor={anchor} MyIcon={elt.MyIcon} myPrimary={elt.myPrimary} myTo={elt.myTo} toggleDrawer={toggleDrawer}/>)}
            </div>
        )
    }


    return (
        <>
            <div className={!darkTheme ? "escuro" : "claro"}>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <CustomizedSwitches />
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
