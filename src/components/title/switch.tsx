import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useSelector, useDispatch } from "react-redux";
import {changeTheme} from "../../store/modules/themeColor/action";

import Brightness5Icon from '@material-ui/icons/Brightness5';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const TheSwitch = withStyles({
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

const CustomizedSwitches: React.FC = () => {
    const darkTheme: boolean = useSelector((state: {color: boolean}) => state.color)
    const dispatch = useDispatch();
    const sun = <Brightness5Icon />
    const moon = <NightsStayIcon />

    const [dark, changeDark] = React.useState(true);
    const [label, changeLabel] = React.useState({icon: moon, state: "moon"})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeDark(event.target.checked);
        if (label.state === "moon") {
            changeLabel({icon: sun, state: "sun"})
        } else {
            changeLabel({icon: moon, state: "moon"})
        }
        dispatch(changeTheme(dark))
    };

    return (
        <FormGroup>
            <FormControlLabel
                style={!darkTheme ? {marginLeft: 20, color: "#C0E0DE"} : {marginLeft: 20, color: "#C2B8B2"}}
                control={<TheSwitch checked={dark} onChange={handleChange} name="checkedA" />}
                label={label.icon}
            />
        </FormGroup>
    );
}

export default CustomizedSwitches
