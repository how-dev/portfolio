import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <h1 style={{textAlign: "center", color: "#C0E0DE"}}>Sumário:</h1>
            <List>
                <ListItem button>
                    <ListItemIcon><ContactsIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="Contatos" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon><FaceIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="Quem sou eu" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon><PersonIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="HardSkills" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon><NaturePeopleIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="SoftSkills" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon><WorkIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="Trabalhos" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
            <List>
                <ListItem button>
                    <ListItemIcon><VerticalAlignTopIcon style={{color: "#C0E0DE"}}/></ListItemIcon>
                    <ListItemText primary="Ir ao topo" style={{color: "#C0E0DE"}}/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <div className="title">
                <Button onClick={toggleDrawer("right", true)}><DehazeIcon style={{color: "white",}}/></Button>
                <h1>Desenvolvedor React</h1>
                <Drawer classes={{ paper: "drawer" }}anchor="right" open={state["right"]} onClose={toggleDrawer("right", false)}>
                    {list("right")}
                </Drawer>
            </div>
            <div style={{height: 100}}/>
        </>
    );
}
