import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-scroll";

interface Props {
    myTo: string,
    myPrimary: string,
    MyIcon: any,
    darkTheme: boolean,
    anchor: Anchor,
    toggleDrawer: any
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MyItens: React.FC<Props> = ({ myTo, myPrimary, MyIcon, darkTheme, anchor, toggleDrawer }) => {

    return (
        <Link activeClass="active" to={myTo} spy={true} smooth={true} duration={500}>
            <List>
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemIcon><MyIcon style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/></ListItemIcon>
                    <ListItemText primary={myPrimary} style={!darkTheme ? {color: "#C0E0DE"} : {color: "#C2B8B2"}}/>
                </ListItem>
            </List>
        </Link>
    )
}

export default MyItens
